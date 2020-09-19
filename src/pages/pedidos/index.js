import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import API from '~/services/api'
import ProductGallery from '~/components/ProductGallery'
import CampaignInfos from '~/components/CampaignInfos'
import ProductTabs from '~/components/ProductTabs'
import ErrorAlert from '~/components/Alerts/ErrorAlert'
import Loading from '~/components/Loading'

const getCampaign = async (campaignId, updateLoading) => {
  updateLoading(true)
  const token = localStorage.getItem('auth-jwt')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  try {
    const res = await API.get(`/campanhas/${campaignId}`, config)
    if (res.status === 200) {
      updateLoading(false)
      return res.data
    }
  } catch (e) {
    updateLoading(false)
    throw new Error('Erro ao buscar os dados da campanha.')
  }
}

const ReservarPedido = () => {
  const [campanha, setCampanha] = useState({})
  const [error, setError] = useState('')
  const [loading, updateLoading] = useState(false)
  const { query } = useRouter()

  useEffect(() => {
    if (query.campanha) {
      if (!campanha.id && !error) {
        getCampaign(query.campanha, updateLoading)
          .then((campanha) => {
            setCampanha(campanha)
          })
          .catch((err) => {
            setError(err.message)
          })
      }
    }
  }, [query.campanha])

  const renderError = () => (
    <MDBCol
      size="12"
      className="d-flex justify-content-center text-center px-3 mt-5"
    >
      <ErrorAlert
        customClasses="mx-auto"
        message={error}
        linkRef="/campanhas"
        linkText="Voltar"
      />
    </MDBCol>
  )

  const renderCampaing = () => (
    <>
      <MDBCol size="12">
        <Title className="my-3 text-center title-orange">Reservar Pedido</Title>
      </MDBCol>
      <MDBCol size="12" md="6" lg="7">
        <ProductGallery campanha={campanha} />
      </MDBCol>
      <MDBCol size="12" md="6" lg="5">
        <CampaignInfos campanha={campanha} />
      </MDBCol>
      <MDBCol size="12">
        <ProductTabs />
      </MDBCol>
    </>
  )

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <MDBContainer fluid>
          <MDBRow>{campanha.id ? renderCampaing() : renderError()}</MDBRow>
        </MDBContainer>
      )}
    </Layout>
  )
}

export default ReservarPedido
