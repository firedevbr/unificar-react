import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBSpinner } from 'mdbreact'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import ItemCampaign from '~/components/ItemCampaign'
import API from '../../services/api'
import { CampaignList, Divider, Container } from './styles'

import CollpaseFilter from '~/components/CollapseFilters'
import CampaignContext from '~/context/campaign'

class TestPage extends Component {
  state = {
    campaigns: [],
    filteredCampaigns: []
  }

  async componentDidMount() {
    await this.fetchCampaigns()
  }

  updateCampaignsList = (campaigns) => {
    this.setState({ filteredCampaigns: campaigns })
  }

  fetchCampaigns = async () => {
    const token = localStorage.getItem('auth-jwt')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    try {
      const res = await API.get('/campanhas', config)
      if (res.status === 200) {
        this.setState({
          campaigns: res.data.results || [],
          filteredCampaigns: res.data.results || []
        })
      }
    } catch (e) {
      console.log(`deu ruim ${e}`)
    }
  }

  render() {
    const { filteredCampaigns } = this.state

    return filteredCampaigns.length === 0 ? (
      <Container>
        <MDBSpinner />
      </Container>
    ) : (
      <Layout>
        <MDBContainer fluid>
          <CampaignContext.Provider
            value={{
              campaigns: this.state.campaigns,
              updateCampaignsList: this.updateCampaignsList
            }}
          >
            <MDBRow>
              <MDBCol sm="5">
                <Title className="my-3 text-center title-orange">
                  Campanhas
                </Title>
              </MDBCol>
              <MDBCol sm="5">
                <CollpaseFilter />
              </MDBCol>
              <MDBCol sm="12" className="mb-4">
                <Divider />
              </MDBCol>
              <MDBCol sm="12">
                <CampaignList>
                  {filteredCampaigns.map((campaign) => (
                    <ItemCampaign key={campaign.id} {...campaign} />
                  ))}
                </CampaignList>
              </MDBCol>
            </MDBRow>
          </CampaignContext.Provider>
        </MDBContainer>
      </Layout>
    )
  }
}

export default TestPage
