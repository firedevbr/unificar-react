import React from 'react'
import Router from 'next/router'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'

import ProgressBar from '~/components/ProgressBarCampaign'
import { LinkCol } from './styles'

const ItemCampaign = ({ nome, valor, descricao, quantidade_pedidos_necessarios: total, quantidade_pedidos_confirmados: reservados }) => {
  return (
    <LinkCol onClick={() => Router.push("/reservar-pedido")}>
      <MDBCard style={{ width: "16rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle className="text-truncate">{nome}</MDBCardTitle>
          <strong>Progresso: {reservados}/{total}</strong>
          <ProgressBar total={total} atual={reservados} ></ProgressBar>
          <p className="green-text">R$ {valor.toFixed(2)}</p>
          <MDBCardText className="text-truncate">
            {descricao}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </LinkCol>
  )
}

export default ItemCampaign
