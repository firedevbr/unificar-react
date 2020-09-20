import React from 'react'
import Router from 'next/router'
import { MDBBtn } from 'mdbreact'
import {
  ItemWrapper,
  Price,
  ItemFooter,
  ItemBody,
  ItemHeader,
  OriginalPrice
} from './styles'
import Time from '../CampaignInfos/components/Time'
import {
  getPercent,
  remainingDays,
  currencyFormat,
  getDiscountPercent,
  getOriginalPrice
} from '~/utils/utils'
import { BadgePercent } from '~/components/ProductGallery/styles'

const ItemCampaign = ({
  id,
  nome,
  valor,
  quantidade_pedidos_necessarios: total,
  quantidade_pedidos_confirmados: reservados,
  imagens,
  data_fim,
  produtos
}) => {
  let imgPath = '/images/placeholder.png'
  const imgIndex = imagens.findIndex((img) => img.imagem_principal === true)
  if (imgIndex > -1) {
    imgPath = `http://localhost${imagens[imgIndex].caminho}`
  }

  const discount = getDiscountPercent(valor, produtos)

  return (
    <ItemWrapper>
      <img className="img-fluid" alt="" src={imgPath} />
      {discount > 0 ? (
        <BadgePercent
          size="small"
          position={{
            top: '5px',
            right: '5px',
            mobile: { top: '5px', right: '5px' }
          }}
        >
          {discount}%
        </BadgePercent>
      ) : (
        ''
      )}
      <ItemBody>
        <ItemHeader>
          <h3 className="text-truncate">{nome}</h3>
        </ItemHeader>
        <Time
          width={getPercent(reservados, total)}
          days={remainingDays(data_fim)}
          size="small"
        />
        <ItemFooter>
          <div>
            <OriginalPrice discount={discount}>
              {discount > 0 ? `R$ ${getOriginalPrice(produtos)}` : 'por apenas'}
            </OriginalPrice>
            <Price>
              R$ <span>{currencyFormat(valor)}</span>
            </Price>
          </div>
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
