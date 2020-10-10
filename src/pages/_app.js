import React from 'react'
import App from 'next/app'

import GlobalStyle from '~/styles/Global'
import GlobalFonts from '~/styles/Fonts'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import { AuthProvider } from '../context/auth'
import { CartProvider } from '../context/CartContext'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <GlobalFonts />
        <AuthProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </AuthProvider>
      </>
    )
  }
}

export default MyApp
