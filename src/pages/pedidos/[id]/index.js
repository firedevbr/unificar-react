import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact'
import { parseISO, format } from 'date-fns'
import API from '~/services/api'
import { currencyFormat } from '~/utils/utils'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import Loading from '~/components/Loading'

import { CampaingDetails, PaymentDetails, OrderContainer } from './styles'

const dateFormat = (dateStr) => {
  const parsed = parseISO(dateStr)
  return format(parsed, 'dd/MM/yyyy')
}

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
      {order.campanha && (
        <MDBContainer fluid>
          <MDBRow>
            <OrderContainer>
              <MDBCol sm="12" className="ml-md-3">
                <Title className="mt-4 mb-4 text-center title-orange">
                  Detalhes da Campanha
                </Title>
                <CampaingDetails>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Nome:</th>
                        <td>{order.campanha.nome}</td>
                      </tr>
                      <tr>
                        <th scope="row">Valor p/unidade:</th>
                        <td>R$ {currencyFormat(order.campanha.valor)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Descrição</th>
                        <td>{order.campanha.descricao}</td>
                      </tr>
                      <tr>
                        <th scope="row">Produtos</th>
                        <td>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CampaingDetails>
                <Title className="mt-5 mb-3 text-center title-orange">
                  Detalhes de Pagamento
                </Title>
                <PaymentDetails>
                  <MDBTable>
                    <MDBTableHead textWhite>
                      <tr className="bg-custom-blue text-center">
                        <th>Parcela</th>
                        <th>Vencimento</th>
                        <th>Status</th>
                        <th>Valor</th>
                        <th>PDF</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {order.boletos.map((boleto, index) => (
                        <tr key={boleto.id} className="text-center">
                          <td>{index + 1}</td>
                          <td>{dateFormat(boleto.vencimento)}</td>
                          <td>{boleto.status}</td>
                          <td className="w-sm-helper">
                            R$ {currencyFormat(boleto.valor)}
                          </td>
                          <td>
                            <a href={boleto.public_url}>
                              <MDBIcon
                                size="2x"
                                className="custom-orange"
                                icon="file-download"
                              />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </PaymentDetails>
              </MDBCol>
            </OrderContainer>
          </MDBRow>
        </MDBContainer>
      )}
    </Layout>
  )
}

export default OrderDetails
