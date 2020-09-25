import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'

import { Divider } from './styles'
import CartList from './components/CartList'
import Checkout from './components/Checkout'

const Carrinho = () => {
  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12" md="5">
            <Title className="title-orange my-3 text-center">
              Carrinho de Compras
            </Title>
          </MDBCol>
          <Divider />
          <MDBCol size="9">
            <CartList />
          </MDBCol>
          <MDBCol size="3">
            <Checkout />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Carrinho
