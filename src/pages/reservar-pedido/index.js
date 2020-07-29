import { MDBContainer } from 'mdbreact'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import API from '~/services/api'


const getCampaign = async (campaignId) => {
  const token = localStorage.getItem('auth-jwt')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const res = await API.get(`/campanhas/${campaignId}`, config)
    if (res.status === 200) {
      return res.data
    }
  } catch (e) {
    console.log(`deu ruim ${e}`)
  }
}

const ReservarPedido = () => {
  const [campanha, setCampanha] = useState({});
  const { query } = useRouter()

  useEffect(() => {
    if (query.campanha) {
      getCampaign(query.campanha).then((campanha) => {
        setCampanha(campanha)
      })
    }
  })
  return (
    <Layout>
      <MDBContainer fluid className="mt-5">
        <Title className="my-5 text-center">Reservar Pedido</Title>
        <h2>{campanha.nome}</h2>
      </MDBContainer>
    </Layout>
  )
}

export default ReservarPedido
