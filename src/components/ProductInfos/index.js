import React from 'react'

import * as Styled from './styles'

import Title from './components/Title'
import Time from './components/Time'

function ProductInfo() {
  return (
    <Styled.ProductInfos>
      <Title border={true} />

      <div className='about'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex natus
          alias id optio delectus quos earum perferendis at reiciendis ad
          doloremque voluptas nulla officia necessitatibus nemo, praesentium
          maxime nisi.
        </p>
      </div>

      <Time width="60" days={2} />

      <div className='price-product'>
        <div className='price-product__left'>
          <div>
            <span>R$ 350,99</span>
            <p>
              <span>R$</span> 304,50
            </p>
          </div>
        </div>

        <div className='price-product__right'>
          <p>
            R$ 304,90 no boleto bancário <br />
            em até 12x sem juros no cartão de crédito
          </p>
        </div>
      </div>

      <div className='quantity-product'>
        <div className='quantity-product__left'>
          <p>Quantidade</p>
          <select className='browser-default custom-select'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </select>
        </div>

        <div className='quantity-product__right'>
          <button>Comprar</button>
        </div>
      </div>
    </Styled.ProductInfos>
  )
}

export default ProductInfo
