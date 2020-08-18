import { MDBSpinner, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import API from '~/services/api'
import ProductGallery from '~/components/ProductGallery'
import CampaignInfos from '~/components/CampaignInfos'
import ProductTabs from '~/components/ProductTabs'

const getCampaign = async (campaignId) => {
  const token = localStorage.getItem('auth-jwt')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

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
  const [campanha, setCampanha] = useState({})
  const { query } = useRouter()

  useEffect(() => {
    if (query.campanha) {
      if (!campanha.id) {
        getCampaign(query.campanha).then((campanha) => {
          setCampanha(campanha)
        })
      }
    }
  })

  return (
    <Layout>
      <MDBContainer fluid className="mt-5">
        <Title className="mt-5 py-3 text-center title-orange">
          Reservar Pedido
        </Title>
      </MDBContainer>
      <MDBRow>
        <MDBContainer fluid className="ml-md-5 ml-lg-5">
          <MDBRow>
            {!campanha ? (
              <MDBCol
                size="12"
                className="d-flex align-items-center justify-content-center"
              >
                <MDBSpinner className="custom-blue" />
              </MDBCol>
            ) : (
              <>
                <MDBCol size="12" md="6" lg="7">
                  {campanha && <ProductGallery campanha={campanha} />}
                </MDBCol>
                <MDBCol size="12" md="6" lg="5">
                  <CampaignInfos campanha={campanha} />
                </MDBCol>
              </>
            )}
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="ml-md-5 ml-lg-5">
          <ProductTabs />
        </MDBContainer>
      </MDBRow>
    </Layout>
  )
}

export default ReservarPedido
