import styled from 'styled-components'

const CampaignInfos = styled.div`
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

        span + span {
          font-size: 2.6rem;
          font-weight: bold;
        }
      }
    }

    .price-product__right{
      width: 100%;

      p{
        font-size: 0.875rem;
        color: #a6b1c3;
        font-weight: 400;
      }
    }
  }

  .total-purchase{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    .total-purchase__left{
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
      p{
        padding-top: .5rem;
        margin-right: 15px;
        color: #a6b1c3;
        font-size: 1.1rem;
        font-weight: 300;
      }

      select{
        border: 1px solid #a6b1c3;
        color: #a6b1c3;
        outline: 0;
        box-shadow: none;
        max-width: 150px;
      }
    }

    .total-purchase__right{
      width: 100%;

      button{
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4057e3;
        border-radius: 5px;
        color: #f0f2f7;
        border: none
      }
    }
  }

  @media(min-width: 768px){
    .price-product {
      .price-product__left{
        width:40%;
      }
      .price-product__right{
        display: flex;
        align-items: center;
        width: 60%;
      }
    }

    .total-purchase{
      .total-purchase__left{
        width: 50%;
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }
      .total-purchase__right{
        width: 50%;
        display: flex;
        align-items: center;
        padding-left: 15px;
      }
    }
  }
`

const PaymentForm = styled.form`
  color: #a6b1c3;
  margin-top: 20px;
  padding-top: 10px;

  .form-check {
    padding-left: 0;
  }

  .parcelas {
    padding-top: 20px;
  }

  .select-wrapper>label.mdb-main-label {
    color: #a6b1c3;
    font-weight: 300;
    top: 0;
  }

  .dropdown-content li>a, .dropdown-content li>span {
    color: #4057e3 !important;
    font-weight: 400;
  }

  .select-wrapper>label.mdb-main-label.active {
    color: #4057e3 !important;
    font-weight: 400;
  }

  .select-wrapper input.select-dropdown {
    color: #a6b1c3;
    margin-bottom: 0px;
  }

  .total-purchase {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    .total-purchase__left {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
      p {
        padding-top: .5rem;
        margin-right: 15px;
        color: #a6b1c3;
        font-size: 1.1rem;
        font-weight: 300;
      }
    }

    .total-purchase__right{
      width: 100%;

      button{
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4057e3;
        border-radius: 5px;
        color: #f0f2f7;
        border: none
      }
    }
  }

  @media(min-width: 768px) {
    .total-purchase{
      margin-top: 60px;

      .total-purchase__left{
        align-items: baseline;
        display: flex;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 0;
        width: 50%;
      }
      .total-purchase__right{
        width: 50%;
        display: flex;
        align-items: center;
        padding-left: 40px;
      }
    }

    .payments {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        width: 100%;

        label {
          margin-bottom: 0px;
        }

        div {
          flex-grow: 1;
          margin-left: 40px;
        }
    }

    .quantity {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .quantity__select__label {
        margin: 0 30px;
      }

      .quantity__select {
        flex-grow: 1;
      }
    }
  }
`

const TotalLabel = styled.span`
  border: 1.1px solid rgba(173, 183, 200, 0.5);
  border-radius: 4px;
  color: #ffaa2b;
  margin: 10px;
  padding: 8px 10px;
  span {
    font-size: 24px;
  }
`
export { CampaignInfos, PaymentForm, TotalLabel }
