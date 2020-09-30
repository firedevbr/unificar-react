import React, { useCallback, useContext } from 'react'
import { MDBIcon } from 'mdbreact'
import CartContext from '~/context/cart-context'
import { ItemCart } from './styles'

import { currencyFormat } from '~/utils/utils'

const CartList = () => {
  const cartContext = useContext(CartContext)

  const handleOnClick = useCallback((id) => {
    cartContext.removeFromCart(id)
  }, [])

  const { cart: products } = cartContext

  return (
    <ul>
      {products &&
        products.map((product) => (
          <ItemCart key={product.id}>
            <img src={product.img} alt={product.description} />
            <div className="information">
              <p>{product.title}</p>
              <span>{product.instructor.name}</span>
            </div>
            <button onClick={() => handleOnClick(product.id)} type="button">
              Remove
            </button>
            <div className="price">
              <p>
                {`R$ ${currencyFormat(product.price)}`}
                <MDBIcon icon="tags" />
              </p>
              <span>{`R$ ${currencyFormat(product.originalPrice)}`}</span>
            </div>
          </ItemCart>
        ))}
    </ul>
  )
}

export default CartList
