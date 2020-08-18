import App from 'next/app'

import GlobalStyle from '~/styles/Global'
import GlobalFonts from '~/styles/Fonts'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import { AuthProvider } from '../context/auth'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <GlobalFonts />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </>
    )
  }
}

export default MyApp
