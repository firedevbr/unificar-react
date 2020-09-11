import React from 'react'
import Router from 'next/router'
import { MDBBtn } from 'mdbreact'
import { ItemWrapper, Price, ItemFooter, ItemBody } from './styles'
import Time from '../CampaignInfos/components/Time'
import { getPercent, remainingDays } from '~/utils/utils'

const ItemCampaign = ({
  id,
  nome,
  valor,
  quantidade_pedidos_necessarios: total,
  quantidade_pedidos_confirmados: reservados,
  imagens,
  data_fim
}) => {
  let imgPath = '/assets/images/2020/07/22050670c8c11ee86d31cabbc94fc8b7.png'
  const imgIndex = imagens.findIndex((img) => img.imagem_principal === true)
  if (imgIndex > -1) {
    imgPath = imagens[imgIndex].caminho
  }

  return (
    <ItemWrapper>
      <img className="img-fluid" alt="" src={`http://localhost${imgPath}`} />
      <ItemBody>
        <h3 className="text-truncate">{nome}</h3>
        <Time
          width={getPercent(reservados, total)}
          days={remainingDays(data_fim)}
          size="small"
        />
        <ItemFooter>
          <Price>R$ {valor.toFixed(2)}</Price>
          <MDBBtn
            color="primary"
            onClick={() => Router.push(`/pedidos?campanha=${id}`)}
          >
            Comprar
          </MDBBtn>
        </ItemFooter>
      </ItemBody>
    </ItemWrapper>
  )
}

export default ItemCampaign
