import React from 'react'
import Router from 'next/router'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'

import ProgressBar from '~/components/ProgressBarCampaign'
import { LinkCol } from './styles'

const ItemCampaign = ({
  nome,
  valor,
  descricao,
  quantidade_pedidos_necessarios: total,
  quantidade_pedidos_confirmados: reservados,
  imagens
  }) => {
    let imgPath = '/assets/images/2020/07/22050670c8c11ee86d31cabbc94fc8b7.png'
    const imgIndex = imagens.findIndex(img => img.imagem_principal === true)
    if (imgIndex > -1) {
      imgPath = imagens[imgIndex].caminho
    }

  return (
    <LinkCol onClick={() => Router.push("/reservar-pedido")}>
      <MDBCard style={{ width: "16rem" }}>
        <MDBCardImage className="img-fluid img-small" src={`http://localhost${imgPath}`} waves/>
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
