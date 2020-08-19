import React, { useState, useEffect } from 'react'
import { differenceInDays, parseISO } from 'date-fns'
import { MDBCollapse, MDBInput } from 'mdbreact'

import { CampaignInfos, PaymentForm, TotalLabel } from './styles'

import Title from './components/Title'
import Time from './components/Time'
import { getPercent, getTotalPrice } from '~/utils/utils'
import Loading from '~/components/Loading'
import API from '~/services/api'

const remainingDays = (dataFim) => {
  return differenceInDays(parseISO(dataFim), new Date())
}

const currencyFormat = (valor) =>
  valor
    ? valor.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    : ''

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
    return {
      error: 'Verifique os campos e tente novamente.',
      campos: emptyInputs
    }
  }

  const parcelado =
    pedido.forma_pagamento === 'parcelado' && pedido.parcelas < 2
  const avista = pedido.forma_pagamento === 'avista' && pedido.parcelas > 1

  if (parcelado || avista) {
    return {
      error:
        'Verifique a forma de pagamento ou o parcelamento e tente novamente.'
    }
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

  const handleFormSubmit = (e) => {
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

    const pedidoInvalido = validaFormPedido(pedido)
    if (pedidoInvalido) {
      console.log('deu ruim', pedidoInvalido)
    }

    setTimeout(() => {
      updateLoading(false)
    }, 4000)
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
                <option key={index} value={index + 1}>
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
    </CampaignInfos>
  )
}

export default ProductInfo
