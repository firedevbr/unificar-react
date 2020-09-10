import styled from 'styled-components'

export const ProductInfos = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .about {
    width: 100%;
    margin-bottom: 2rem;
    p {
      font-size: 1rem;
      margin-top: 1rem;
      color: #adb7c8;
    }
  }

  .price-product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-top: 1px solid rgba(173, 183, 200, 0.5);

    border-bottom: 1px solid rgba(173, 183, 200, 0.5);

    .price-product__left {
      width: 100%;

      span {
        text-decoration: line-through;
        color: #a6b1c3;
        font-weight: 400;
      }

      p {
        color: #ffaa2b;
        font-weight: bold;
        font-size: 2.6rem;

        span {
          text-decoration: none;
          color: #ffaa2b;
          font-size: 1.4rem;
        }
      }
    }

    .price-product__right {
      width: 100%;

      p {
        font-size: 0.875rem;
        color: #a6b1c3;
        font-weight: 400;
      }
    }
  }

  .quantity-product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    .quantity-product__left {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
      p {
        padding-top: 0.5rem;
        margin-right: 15px;
        color: #a6b1c3;
        font-size: 1.1rem;
        font-weight: 300;
      }

      select {
        border: 1px solid #a6b1c3;
        color: #a6b1c3;
        outline: 0;
        box-shadow: none;
        max-width: 150px;
      }
    }

    .quantity-product__right {
      width: 100%;

      button {
        width: 100%;
        height: 54px;
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

  @media (min-width: 768px) {
    .price-product {
      .price-product__left {
        width: 40%;
      }
      .price-product__right {
        display: flex;
        align-items: center;
        width: 60%;
      }
    }

    .quantity-product {
      .quantity-product__left {
        width: 50%;
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }
      .quantity-product__right {
        width: 50%;
        display: flex;
        align-items: center;
        padding-left: 15px;
      }
    }
  }
`
