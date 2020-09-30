import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'
import CartState from '~/context/CartState'
import { Divider } from './styles'
import CartList from './components/CartList'
import Checkout from './components/Checkout'
import CartContext from '~/context/cart-context'

const Carrinho = () => {
  return (
    <CartState>
      <Layout>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="12" xl="5">
              <Title className="title-orange my-3 text-center">
                Carrinho de Compras
              </Title>
            </MDBCol>
            <Divider />
            <CartContext.Consumer>
              {(context) => (
                <>
                  <MDBCol size="12" xl="9">
                    {context.cart.length > 0 && (
                      <CartList productList={context.cart} />
                    )}
                  </MDBCol>
                  <MDBCol size="12" xl="3">
                    {context.cart.length > 0 && (
                      <Checkout productList={context.cart} />
                    )}
                  </MDBCol>
                </>
              )}
            </CartContext.Consumer>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </CartState>
  )
}

export default Carrinho
