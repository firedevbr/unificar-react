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

import { CardHeader } from './styles'

const ErrorAlert = ({ message, linkRef, linkText }) => {
  return (
    <MDBCol size="10" md="3">
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
            <MDBBtn color="pink">{linkText}</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ErrorAlert
