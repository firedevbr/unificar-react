import {
  MDBContainer
} from 'mdbreact'


import Layout from '~/components/layout';
import HeaderCampaign from '~/components/HeaderCampaign'
import TableRequests from '~/components/TableRequests'

export default () => (
  <Layout>
    <MDBContainer fluid className='mt-5'>
      <HeaderCampaign title="Pedidos Recebidos" />
    </MDBContainer>
    <TableRequests />
  </Layout>
);

