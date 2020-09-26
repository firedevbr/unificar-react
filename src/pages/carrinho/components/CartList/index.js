import React, { useEffect, useState } from 'react'
import { MDBIcon } from 'mdbreact'

import { ItemCart } from './styles'

import { currencyFormat } from '~/utils/utils'

const CartList = ({ productList }) => {
  const [products, setProducts] = useState()

  useEffect(() => {
    setProducts(productList)
  }, [])

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
            <button type="button">Remove</button>
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
