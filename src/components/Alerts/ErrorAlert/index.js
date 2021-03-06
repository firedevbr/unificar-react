import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon
} from 'mdbreact'
import Link from 'next/link'

import { CardHeader, CardButton } from './styles'

const ErrorAlert = ({ message, linkRef, linkText }) => {
  return (
    <MDBCol size="10" md="4">
      <MDBCard>
        <CardHeader>
          <MDBIcon
            icon="exclamation-triangle"
            size="5x"
            className="white-text"
          />
        </CardHeader>
        <MDBCardBody>
          <MDBCardTitle>Algo deu Errado</MDBCardTitle>
          <MDBCardText>{message || 'Página em manutenção'}</MDBCardText>
          <Link href={linkRef}>
            <CardButton>{linkText}</CardButton>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ErrorAlert
