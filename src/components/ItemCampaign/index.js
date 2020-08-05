import React from 'react'
import Router from 'next/router'

import ProgressBar from '~/components/ProgressBarCampaign'
import { ItemWrapper, Price, Progress } from './styles'

const ItemCampaign = ({
  id,
  nome,
  valor,
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
      <ItemWrapper onClick={() => Router.push(`/reservar-pedido?campanha=${id}`)}>
        <img className="img-fluid" src={`http://localhost${imgPath}`} />
        <h3 className="text-truncate">{nome}</h3>
        <Progress>Progresso: {reservados}/{total}</Progress>
        <ProgressBar total={total} atual={reservados} ></ProgressBar>
        <Price className="green-text">R$ {valor.toFixed(2)}</Price>
      </ItemWrapper>
  )
}

export default ItemCampaign
