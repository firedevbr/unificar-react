import React, { useState, useEffect, useRef } from 'react'
import { MDBCollapse, MDBInput } from 'mdbreact'

import { useRouter } from 'next/router'
import { CampaignInfos, PaymentForm, TotalLabel } from './styles'

import Title from './components/Title'
import Time from './components/Time'
import {
  getPercent,
  getTotalPrice,
  currencyFormat,
  remainingDays
} from '~/utils/utils'
import Loading from '~/components/Loading'
import ErrorModal from '~/components/ErrorModal'
import API from '~/services/api'

const getParcelas = (total, valor_sinal) => {
  const parcelas = []
  for (let i = 1; i <= 3; i++) {
    parcelas.push((total - valor_sinal) / i)
  }
  return parcelas
}

const validaFormPedido = (pedido) => {
  const emptyInputs = Object.keys(pedido).filter((key) => !pedido[key])
  if (emptyInputs.length > 0) {
    throw new Error(`Verifique o(s) campo(s) e tente novamente: ${emptyInputs}`)
  }

  const parcelado =
    pedido.forma_pagamento === 'parcelado' && pedido.parcelas < 2
  const avista = pedido.forma_pagamento === 'avista' && pedido.parcelas > 1

  if (parcelado || avista) {
    throw new Error(
      'Verifique a forma de pagamento ou o parcelamento e tente novamente.'
    )
  }
}

const [, ...quantidade] = [...Array(11).keys()]

const ProductInfo = ({ campanha }) => {
  const [formaPagamento, updateFormaPagamento] = useState('avista')
  const [total, updateTotal] = useState({
    sinal: campanha.valor_sinal,
    valor: campanha.valor
  })
  const [parcelas, updateParcelas] = useState([])
  const totalProdutos = getTotalPrice(campanha.produtos)
  const [loading, updateLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!total.valor) {
      updateTotal({ sinal: campanha.valor_sinal, valor: campanha.valor })
      updateParcelas(getParcelas(campanha.valor, campanha.valor_sinal))
    }
  })

  const handlePaymentChange = (e) => {
    updateFormaPagamento(e.target.value)
  }

  const handleQuantityChange = (e) => {
    const quantity = e.target.value
    updateTotal({
      sinal: campanha.valor_sinal * quantity,
      valor: campanha.valor * quantity
    })
    updateParcelas(
      getParcelas(campanha.valor * quantity, campanha.valor_sinal * quantity)
    )
  }

  const modalRef = useRef()

  const createOrder = async (pedido) => {
    const token = localStorage.getItem('auth-jwt')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    try {
      const res = await API.post('/pedidos', { ...pedido }, config)
      if (res.status !== 201) {
        throw Error()
      }
      return res
    } catch (err) {
      throw new Error('Não foi possível finalizar o pedido!')
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    updateLoading(true)
    const pedido = {
      campanha: campanha.id,
      quantidade_produtos: e.target.input_quantidade.value,
      opcao_entrega: 'retirar_no_local',
      data_retirada: '31/01/2021 10:00',
      forma_pagamento: formaPagamento,
      parcelas: formaPagamento === 'avista' ? 1 : e.target.input_parcelas.value
    }

    try {
      validaFormPedido(pedido)

      const { data } = await createOrder(pedido)
      updateLoading(false)
      router.push(`/pedidos/${data.id}`)
    } catch (err) {
      updateLoading(false)
      modalRef.current.renderModal('Erro ao Realizar o Pedido', err.message)
    }
  }

  return (
    <CampaignInfos>
      {loading && <Loading />}
      <Title border title={campanha.nome} />

      <div className="about">
        <p>{campanha.descricao}</p>
      </div>

      <Time
        width={getPercent(
          campanha.quantidade_pedidos_confirmados,
          campanha.quantidade_pedidos_necessarios
        )}
        days={remainingDays(campanha.data_fim)}
      />

      <div className="price-product">
        <div className="price-product__left">
          <div>
            <span>R$ {currencyFormat(totalProdutos)}</span>
            <p>
              <span>R$ </span>
              {currencyFormat(campanha.valor)}
            </p>
          </div>
        </div>

        <div className="price-product__right">
          <p>
            R$ {currencyFormat(campanha.valor)} à vista ou em até 1 + 3x no
            boleto bancário
          </p>
        </div>
      </div>

      <PaymentForm onSubmit={handleFormSubmit}>
        <div className="quantity">
          <div>
            <label>Forma de Pagamento:</label>
            <div className="d-flex align-items-center">
              <MDBInput
                gap
                checked={formaPagamento === 'avista'}
                onChange={handlePaymentChange}
                label="à vista"
                type="radio"
                id="radio1"
                containerClass="mr-3"
                value="avista"
              />
              <MDBInput
                gap
                checked={formaPagamento === 'parcelado'}
                onChange={handlePaymentChange}
                label="parcelar"
                type="radio"
                id="radio2"
                containerClass="mr-3"
                value="parcelado"
              />
            </div>
          </div>
          <label className="quantity__select__label">Quantidade:</label>
          <div className="quantity__select">
            <select
              className="browser-default custom-select"
              selected={quantidade[0]}
              onChange={handleQuantityChange}
              name="input_quantidade"
              required
            >
              {quantidade.map((option, index) => (
                <option key={index} value={index + 2}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <MDBCollapse
          id="select-parcelas"
          isOpen={formaPagamento === 'parcelado'}
          className="parcelas"
        >
          <div className="payments">
            <div>
              <select
                className="browser-default custom-select"
                name="input_parcelas"
              >
                <option value="" disabled selected>
                  Parcelas
                </option>
                {parcelas &&
                  parcelas.map((parcela, index) => (
                    <option key={index} value={index + 2}>
                      1x R$ {currencyFormat(total.sinal)} + {index + 1}x R${' '}
                      {currencyFormat(parcela)}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </MDBCollapse>
        <div className="total-purchase">
          <div className="total-purchase__left">
            <span className="custom-orange">Total</span>
            <TotalLabel>
              R$ <span>{currencyFormat(total.valor)}</span>
            </TotalLabel>
          </div>

          <div className="total-purchase__right">
            <button type="submit">Comprar</button>
          </div>
        </div>
      </PaymentForm>
      <ErrorModal ref={modalRef} />
    </CampaignInfos>
  )
}

export default ProductInfo
