import React, { useEffect } from 'react'
import { differenceInDays, parseISO } from 'date-fns'
import CurrencyFormat from 'react-currency-format'

import { CampaignInfos } from './styles'

import Title from './components/Title'
import Time from './components/Time'
import { getProgressPercent } from '~/utils/utils'

const remainingDays = (dataFim) => {
  return differenceInDays(parseISO(dataFim), new Date())
}

const ProductInfo = ({ campanha }) => {

  return (
    <CampaignInfos>
      <Title border={true} title={campanha.nome} />

      <div className='about'>
        <p>
          {campanha.descricao}
        </p>
      </div>

      <Time
        width={getProgressPercent(campanha.quantidade_pedidos_confirmados, campanha.quantidade_pedidos_necessarios)}
        days={remainingDays(campanha.data_fim)}
      />

      <div className='price-product'>
        <div className='price-product__left'>
          <div>
            <span>R$ 600,00</span>
            <p>
              <span>R$  </span>
              <CurrencyFormat decimalScale={2} fixedDecimalScale={true} displayType={'text'} value={campanha.valor} thousandSeparator={'.'} decimalSeparator={','} />
            </p>
          </div>
        </div>

        <div className='price-product__right'>
          <p>
            R$ 304,90 no boleto bancário <br />
            em até 12x sem juros no cartão de crédito
          </p>
        </div>
      </div>

      <div className='quantity-product'>
        <div className='quantity-product__left'>
          <p>Quantidade</p>
          <select className='browser-default custom-select'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </select>
        </div>

        <div className='quantity-product__right'>
          <button>Comprar</button>
        </div>
      </div>
    </CampaignInfos>
  )
}

export default ProductInfo
