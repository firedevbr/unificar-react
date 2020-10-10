import React from 'react'
import { useTransition } from 'react-spring'
import { MDBIcon } from 'mdbreact'
import { useCart } from '~/context/CartContext'
import { ItemCart } from './styles'

import { currencyFormat } from '~/utils/utils'

const CartList = () => {
  const { removeFromCart, cart: products } = useCart()
  const productsWithTransition = useTransition(
    products,
    (product) => product.id,
    {
      enter: { opacity: '1' },
      leave: { opacity: '0' }
    }
  )

  return (
    <ul>
      {productsWithTransition &&
        productsWithTransition.map(({ item, key, props }) => (
          <ItemCart key={key} style={props}>
            <img src={item.img} alt={item.description} />
            <div className="information">
              <p>{item.title}</p>
              <span>{item.instructor.name}</span>
            </div>
            <button onClick={() => removeFromCart(item.id)} type="button">
              Remove
            </button>
            <div className="price">
              <p>
                {`R$ ${currencyFormat(item.price)}`}
                <MDBIcon icon="tags" />
              </p>
              <span>{`R$ ${currencyFormat(item.originalPrice)}`}</span>
            </div>
          </ItemCart>
        ))}
    </ul>
  )
}

export default CartList
