import React from 'react'

import { AuthProvider } from './auth'
import { CartProvider } from './CartContext'
import { ToastProvider } from './ToastContext'

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <CartProvider>{children}</CartProvider>
      </ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
