import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MDBIcon } from 'mdbreact'
import API from '~/services/api'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import Loading from '~/components/Loading'

import { CampaingDetails } from './styles'

const OrderDetails = () => {
  const router = useRouter()
  const [loading, updateLoading] = useState(false)
  const [order, updateOrder] = useState({})
  const { id } = router.query

  const fetchOrder = async () => {
    updateLoading(true)
    const token = localStorage.getItem('auth-jwt')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    try {
      const res = await API.get(`/pedidos/${id}`, config)
      updateLoading(false)
      if (res.status === 200) {
        updateOrder(res.data)
      }
    } catch (e) {
      console.log(`deu ruim ${e}`)
      updateLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchOrder()
    }
  }, [id])
  return (
    <Layout>
      {loading && <Loading />}
      <Title className="my-3 text-center title-orange">
        Detalhes do Pedido
      </Title>
      {order.campanha && (
        <CampaingDetails>
          <div className="labels">
            <ul>
              <li>Nome:</li>
              <li>Valor p/unidade:</li>
              <li>Descrição:</li>
              <li>Produtos:</li>
            </ul>
          </div>
          <div className="details">
            <ul>
              <li>{order.campanha.nome}</li>
              <li>{order.campanha.valor}</li>
              <li>{order.campanha.descricao}</li>
              <li>
                <ul>
                  {order.campanha.produtos.map((produto) => (
                    <li key={produto.id}>
                      <MDBIcon
                        size="sm"
                        icon="shopping-cart"
                        className="custom-blue"
                      />
                      &nbsp;&nbsp;
                      {produto.nome}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </CampaingDetails>
      )}
    </Layout>
  )
}

export default OrderDetails
