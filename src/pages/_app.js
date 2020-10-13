import React from 'react'
import App from 'next/app'

import GlobalStyle from '~/styles/Global'
import GlobalFonts from '~/styles/Fonts'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import AppProvider from '../context/index'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <GlobalFonts />
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </>
    )
  }
}

export default MyApp
