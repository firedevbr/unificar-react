import React, { useState, useEffect, useCallback, useContext } from 'react'
import { loadShopList, addToShopList, removeById, findById } from '~/utils/cart'
import { useToast } from './ToastContext'

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
})

const CartProvider = (props) => {
  const [cart, setCart] = useState([])
  const { addToast } = useToast()

  useEffect(() => {
    setCart(loadShopList())
  }, [])

  const addToCart = useCallback((product) => {
    const exists = findById(product.id)
    if (exists) {
      addToast({
        type: 'error',
        text: 'Produto já existe no carrinho'
      })

      return false
    }
    addToShopList(product)
    setCart(loadShopList())
    addToast({
      type: 'success',
      text: 'Produto adicionado ao carrinho!'
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
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
