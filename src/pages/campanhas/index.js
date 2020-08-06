import { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import ItemCampaign from '~/components/ItemCampaign'
import API from '../../services/api'
import { CampaignList, Divider } from './styles'

import CollpaseFilter from '~/components/CollapseFilters'

class TestPage extends Component {

  state = {
    campaigns: [],
  }

  async componentDidMount() {
    await this.fetchCampaigns()
  }

  fetchCampaigns = async () => {
    const token = localStorage.getItem('auth-jwt')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const res = await API.get('/campanhas', config)
      if (res.status === 200) {
        this.setState({ campaigns: res.data.results || [] })
      }
    } catch (e) {
      console.log(`deu ruim ${e}`)
    }
  }

  render() {
    const { campaigns } = this.state

    return (
      <Layout>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol sm="5" className="ml-md-5">
              <Title className="my-3 text-center">Campanhas</Title>
            </MDBCol>
            <MDBCol sm="5">
              <CollpaseFilter />
            </MDBCol>
            <MDBCol sm="12" className="mb-4 ml-md-5">
              <Divider />
            </MDBCol>
            <MDBCol sm="12" className="ml-md-5">
              <CampaignList>
                {campaigns.map((campaign) => (
                  <ItemCampaign key={campaign.id} {...campaign}></ItemCampaign>
                ))
                }
              </CampaignList>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
}

export default TestPage
