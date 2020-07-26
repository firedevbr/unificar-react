import { MDBContainer } from 'mdbreact'

import Layout from '~/components/layout'
import Title from '~/components/Title'

const TestPage = () => (
  <Layout>
    <MDBContainer fluid className="mt-5">
      <Title className="my-5 text-center">Reservar Pedido</Title>
    </MDBContainer>
  </Layout>
)

export default TestPage
