import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
import { parseISO, format } from 'date-fns'
import API from '~/services/api'
import { currencyFormat } from '~/utils/utils'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import Loading from '~/components/Loading'

import { CampaingDetails, PaymentDetails, PageWrapper } from './styles'

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
        <PageWrapper>
          <Title className="mt-5 pt-4 mb-3 text-center title-orange">
            Detalhes da Campanha
          </Title>
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
                    <td>R$ {currencyFormat(boleto.valor)}</td>
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
        </PageWrapper>
      )}
    </Layout>
  )
}

export default OrderDetails
