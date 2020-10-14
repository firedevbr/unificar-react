import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'
import { Divider } from './styles'
import CartList from './components/CartList'
import Checkout from './components/Checkout'
import { useCart } from '~/context/CartContext'

const Carrinho = () => {
  const { cart } = useCart()
  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12" xl="5">
            <Title className="title-orange my-3 text-center">
              Carrinho de Compras
            </Title>
          </MDBCol>
          <Divider />
          <MDBCol size="12" xl="9" className="mb-2">
            {cart.length > 0 && <CartList productList={cart} />}
          </MDBCol>
          <MDBCol size="12" xl="3">
            {cart.length > 0 && <Checkout productList={cart} />}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Carrinho
