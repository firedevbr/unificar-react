import React from 'react'
import { currencyFormat } from '~/utils/utils'

import { CheckoutWrapper } from './styles'

const getFinalPrice = (productList, key) => {
  const sumPrice = productList.reduce((total, product) => {
    return total + parseFloat(product[key])
  }, 0)
  return currencyFormat(sumPrice)
}

const Checkout = ({ productList }) => {
  return (
    <CheckoutWrapper>
      <p>Total:</p>
      <p className="totalPrice">{`R$ ${getFinalPrice(
        productList,
        'price'
      )}`}</p>
      <span>{`R$ ${getFinalPrice(productList, 'originalPrice')}`}</span>
      <button type="button">Comprar</button>
    </CheckoutWrapper>
  )
}

export default Checkout
