import React, { useState, useEffect } from 'react'

import CartContext from './cart-context'
import { loadShopList, addToShopList, removeById, findById } from '~/utils/cart'

const CartState = (props) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(loadShopList())
  }, [])

  const addToCart = (product) => {
    console.log(`adding to cart ${product}`)
    const exists = findById(product.id)
    if (exists) {
      return false
    }
    addToShopList(product)
    setCart(loadShopList())
  }

  const removeFromCart = (productId) => {
    console.log(`Removing from cart ${productId}`)
    removeById(productId)
    setCart(loadShopList())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
