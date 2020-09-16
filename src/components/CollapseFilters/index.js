import React, { Component } from 'react'
import { MDBCollapse, MDBIcon } from 'mdbreact'
import { IconButton } from './styles'
import SliderFilter from '~/components/SliderFilter'

class CollpaseFilter extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))
  }

  render() {
    return (
      <>
        <IconButton
          className="mt-md-3"
          onClick={this.toggleCollapse('filtersCollapse')}
        >
          <MDBIcon icon="sliders-h" /> Filtrar
        </IconButton>
        <MDBCollapse id="filtersCollapse" isOpen={this.state.collapseID}>
          <SliderFilter name="Progresso:" />
        </MDBCollapse>
      </>
    )
  }
}

export default CollpaseFilter
