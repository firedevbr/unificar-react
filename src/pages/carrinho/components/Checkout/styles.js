import styled from 'styled-components'
import { lighten } from 'polished'

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 15px;

  p {
    color: #a6b1c3;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .totalPrice {
    color: #384e6e;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 0px;
  }

  span {
    color: #a6b1c3;
    font-size: 16px;
    margin-bottom: 15px;
    text-decoration: line-through;
  }

  button {
    background-color: #cc6329;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    padding: 15px 0;
    width: 200px;
    transition: 0.2s background-color;

    &:hover {
      background-color: ${lighten(0.1, '#cc6329')};
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    align-items: center;
    margin-left: auto !important;
    margin-right: auto;
    margin-top: 20px;

    button {
      width: 30%;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;

    span {
      margin-bottom: 20px;
    }

    button {
      width: 100%;
    }
  }
`

export { CheckoutWrapper }
