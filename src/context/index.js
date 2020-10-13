import React from 'react'

import { AuthProvider } from './auth'
import { CartProvider } from './CartContext'
import { ToastProvider } from './ToastContext'

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>{children}</ToastProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default AppProvider
