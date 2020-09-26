import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'

import { Divider } from './styles'
import CartList from './components/CartList'
import Checkout from './components/Checkout'

import courses from '../cursos/dummyData'

const loadProductsList = () => {
  const jsonList = localStorage.getItem('products')

  return JSON.parse(jsonList) || courses.slice(0, 2)
}

const Carrinho = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    setProducts(loadProductsList)
  }, [])
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
          <MDBCol size="12" xl="9">
            {products && <CartList productList={products} />}
          </MDBCol>
          <MDBCol size="12" xl="3">
            {products && <Checkout productList={products} />}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Carrinho
