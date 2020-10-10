import React, { useState, useEffect, useCallback, useContext } from 'react'
import { loadShopList, addToShopList, removeById, findById } from '~/utils/cart'

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
})

const CartProvider = (props) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(loadShopList())
  }, [])

  const addToCart = useCallback((product) => {
    console.log(`adding to cart ${product}`)
    const exists = findById(product.id)
    if (exists) {
      return false
    }
    addToShopList(product)
    setCart(loadShopList())
  }, [])

  const removeFromCart = useCallback((productId) => {
    console.log(`Removing from cart ${productId}`)
    removeById(productId)
    setCart(loadShopList())
  }, [])

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

const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
