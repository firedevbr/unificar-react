import React from 'react'

import * as Styled from './styles'

import Title from '../ProductInfos/components/Title'
import Time from '../ProductInfos/components/Time'

function ItemProductCarousel() {
  return (
    <>
      <Styled.Shadow>
        <Styled.ProductCarouselImage>
          <img
            src="https://www.dentalsorria.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mascara_ssplus.jpg.jpg"
            alt=""
          />

          <div className="porcetage">
            <span>10%</span>
          </div>
        </Styled.ProductCarouselImage>

        <Styled.ProductCarouselText>
          <Title />
          <Time width="20" days={1} />

          <div className="price-product">
            <div className="price-product__left">
              <span>R$ 350,99</span>
              <p>
                <span>R$</span> 304,50
              </p>
            </div>

            <div className="price-product__right">
              <button>Comprar</button>
            </div>
          </div>
        </Styled.ProductCarouselText>
      </Styled.Shadow>
    </>
  )
}

export default ItemProductCarousel
