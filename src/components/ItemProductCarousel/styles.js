import styled from 'styled-components'

export const Shadow = styled.div`
  width: 100%;
  box-shadow: 0px 0px 12px -8px rgba(0, 0, 0, 0.75);
  margin-bottom: 2rem;
`

export const ProductCarouselImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: auto;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .porcetage {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    background: #2ec701;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ProductCarouselText = styled.div`
  width: 100%;
  border-radius: 0 0 5px 5px;
  background: #fff;
  padding: 10px 15px;
  border-top: 2px solid #f5f6f9;

  .price-product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;

    .price-product__left {
      width: 50%;

      span {
        text-decoration: line-through;
        color: #a6b1c3;
        font-weight: 400;
      }

      p {
        color: #ffaa2b;
        font-weight: bold;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;

        span {
          text-decoration: none;
          color: #ffaa2b;
          font-size: 1rem;
        }
      }
    }

    .price-product__right {
      width: 50%;

      button {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4057e3;
        border-radius: 5px;
        color: #f0f2f7;
        border: none;
      }
    }
  }
`
