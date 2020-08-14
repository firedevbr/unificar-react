import React, { useState } from 'react'
import { differenceInDays, parseISO } from 'date-fns'
import CurrencyFormat from 'react-currency-format'
import { MDBCollapse, MDBInput, MDBSelect, MDBSelectOptions, MDBSelectOption, MDBSelectInput } from 'mdbreact'

import { CampaignInfos, PaymentForm } from './styles'

import Title from './components/Title'
import Time from './components/Time'
import { getPercent, getTotalPrice } from '~/utils/utils'

const remainingDays = (dataFim) => {
  return differenceInDays(parseISO(dataFim), new Date())
}

const currencyFormat = (valor) => (
  <CurrencyFormat decimalScale={2} fixedDecimalScale={true} displayType={'text'} value={valor} thousandSeparator={'.'} decimalSeparator={','} />
)

const quantidade = [...Array(10).keys()]

const ProductInfo = ({ campanha }) => {
  const [formaPagamento, updateFormaPagamento] = useState('avista')
  const totalProdutos = getTotalPrice(campanha.produtos)

  const handlePaymentChange = (e) => {
    updateFormaPagamento(e.target.value)
  }

  return (
    <CampaignInfos>
      <Title border={true} title={campanha.nome} />

      <div className='about'>
        <p>
          {campanha.descricao}
        </p>
      </div>

      <Time
        width={getPercent(campanha.quantidade_pedidos_confirmados, campanha.quantidade_pedidos_necessarios)}
        days={remainingDays(campanha.data_fim)}
      />

      <div className='price-product'>
        <div className='price-product__left'>
          <div>
            <span>R$ {currencyFormat(totalProdutos)}</span>
            <p>
              <span>R$  </span>
              {currencyFormat(campanha.valor)}
            </p>
          </div>
        </div>

        <div className='price-product__right'>
          <p>
            R$ {currencyFormat(campanha.valor)} à visto ou em até 1 + 3x no boleto bancário
          </p>
        </div>
      </div>

      <PaymentForm onSubmit={(e) => e.preventDefault()}>
        <label>Forma de Pagamento:</label>
        <div className="d-flex align-items-center">
          <MDBInput
            gap
            checked={formaPagamento === 'avista'}
            onChange={handlePaymentChange}
            label='à vista'
            type='radio'
            id='radio1'
            containerClass='mr-3'
            value='avista'
          />
          <MDBInput
            gap
            checked={formaPagamento === 'parcelado'}
            onChange={handlePaymentChange}
            label='parcelar'
            type='radio'
            id='radio2'
            containerClass='mr-3'
            value='parcelado'
          />
        </div>
        <MDBCollapse isOpen={formaPagamento === 'parcelado'} className="parcelas">
          <MDBSelect label="Parcelas">
            <MDBSelectInput selected="Selecione a forma de parcelamento" />
            <MDBSelectOptions>
              <MDBSelectOption value="1">1x R$ 100,00 + 1x R$400,00</MDBSelectOption>
              <MDBSelectOption value="2">1x R$ 100,00 + 2x R$200,00</MDBSelectOption>
              <MDBSelectOption value="3">1x R$ 100,00 + 3x R$133,34</MDBSelectOption>
            </MDBSelectOptions>
          </MDBSelect>
        </MDBCollapse>
        <div className='quantity-product'>
          <div className='quantity-product__left'>
            <MDBSelect label="Quantidade">
              <MDBSelectInput />
              <MDBSelectOptions>
                {quantidade.map((option, index) => (<MDBSelectOption key={index} value={index + 1}>{index + 1}</MDBSelectOption>))}
              </MDBSelectOptions>
            </MDBSelect>
          </div>

          <div className='quantity-product__right'>
            <button>Comprar</button>
          </div>
        </div>
      </PaymentForm>
    </CampaignInfos>
  )
}

export default ProductInfo
