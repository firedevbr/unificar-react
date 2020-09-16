import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Layout from '~/components/layout'
import Title from '~/components/Title'
import ItemCampaign from '~/components/ItemCampaign'
import API from '../../services/api'
import { CampaignList, Divider } from './styles'

import CollpaseFilter from '~/components/CollapseFilters'
import CampaignContext from '~/context/campaign'
import Loading from '~/components/Loading'
import ErrorAlert from '~/components/Alerts/ErrorAlert'

class CampaingsPage extends Component {
  state = {
    campaigns: [],
    filteredCampaigns: [],
    loading: false,
    error: ''
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      await this.fetchCampaigns()
    } catch (err) {
      this.setState({ error: err.message })
    }

    this.setState({ loading: false })
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
      throw new Error('Erro ao carregar campanhas.')
    }
  }

  render() {
    const { filteredCampaigns, loading, error } = this.state

    return (
      <Layout>
        {loading && <Loading />}
        {error ? (
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol
                size="12"
                className="d-flex justify-content-center text-center px-3 mt-5"
              >
                <ErrorAlert
                  customClasses="mx-auto"
                  message={error}
                  linkRef="/"
                  linkText="Voltar"
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
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
        )}
      </Layout>
    )
  }
}

export default CampaingsPage
