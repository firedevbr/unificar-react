import React, { Component } from 'react'
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact'

class ErrorModal extends Component {
  state = {
    title: 'Erro',
    text: 'Erro ao processar os dados. Tente novamente mais tarde',
    modal: false
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  renderModal = (title, text) => {
    this.setState({ title, text })
    this.toggle()
  }

  render() {
    const { modal, title, text } = this.state

    return (
      <MDBContainer>
        <MDBModal isOpen={modal} toggle={this.toggle} centered>
          <MDBModalHeader toggle={this.toggle}>{title}</MDBModalHeader>
          <MDBModalBody>
            <div className="p-5">{text}</div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Fechar
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ErrorModal
