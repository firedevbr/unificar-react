import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Layout from '~/components/layout'

import ProductGallery from '~/components/ProductGallery'
import ProductInfos from '~/components/ProductInfos'
import ProductTabs from '~/components/ProductTabs'
import ContainerOffers from '~/components/ContainerOffers'
import ItemProductCarousel from '~/components/ItemProductCarousel'
import CarouselImages from '~/components/CarouselImages'

export default () => (
  <Layout>
    <MDBRow>
      <MDBContainer fluid className="mt-5">
        <MDBRow>
          <MDBCol size="12" md="6" lg="7">
            <ProductGallery />
          </MDBCol>
          <MDBCol size="12" md="6" lg="5">
            <ProductInfos />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBCol size="12">
        <MDBContainer fluid>
          <ProductTabs />
        </MDBContainer>
      </MDBCol>
      <MDBCol size="12" style={{ padding: '0' }}>
        <ContainerOffers>
          <MDBContainer fluid>
            <h2>Ofertas similares</h2>

            <MDBRow>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
            </MDBRow>

            <CarouselImages />

            <h2>Ofertas baseadas em sua navegação</h2>

            <MDBRow>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
              <MDBCol size="12" md="3">
                <ItemProductCarousel />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </ContainerOffers>
      </MDBCol>
    </MDBRow>
  </Layout>
)
