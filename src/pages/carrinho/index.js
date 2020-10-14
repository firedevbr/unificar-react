import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'
import SimpleButton from '~/components/SimpleButton'
import { Divider, KeepShopping } from './styles'
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
          {cart.length > 0 ? (
            <>
              <MDBCol size="12" xl="9" className="mb-2">
                <CartList productList={cart} />
              </MDBCol>
              <MDBCol size="12" xl="3">
                <Checkout productList={cart} />
              </MDBCol>
            </>
          ) : (
            <MDBCol size="12">
              <KeepShopping>
                <MDBIcon icon="shopping-cart" size="5x" />
                <p>Seu carrinho está vazio.</p>
                <SimpleButton type="button" bgColor="default">
                  Continuar Comprando
                </SimpleButton>
              </KeepShopping>
            </MDBCol>
          )}
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Carrinho
