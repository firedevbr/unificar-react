import styled from 'styled-components'

const SliderWrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 15px;
  width: 60%;

  .row {
    align-items: center;

    div {
      display: flex;
      align-items: center;
      width: 100%;

      p {
        margin: 10px 10px 10px 0px;
      }

      .progress-value {
        background-color: #fff;
        border: 1.5px solid #eeeeee;
        border-radius: 4px;
        color: #384e6e;
        font-weight: 600;
        padding: 8px 10px;
        text-align: center;
        width: 85px;
      }
    }

    .slider-bottom {
      justify-content: space-between;
      margin-top: 5px;
      .btn-outline-primary {
        color: #384e6e !important;
        border: 2px solid #384e6e !important;
        margin-right: 0px;
      }

      .btn-link {
        background: transparent;
        border: none;
        &:hover {
          color: #ffc107;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  .range-field input[type='range'] + .thumb {
    background-color: #384e6e;
    display: none; /* @TODO está com bug pra exibir o valor na tag acima do range, coloquei none pra não exibir */
  }

  input[type='range']::-webkit-slider-thumb {
    background-color: #384e6e;
  }

  input[type='range']::-moz-range-thumb {
    background-color: #384e6e;
  }

  input[type='range']::-ms-thumb {
    background-color: #384e6e;
  }
`
const ButtonSmall = styled.button`
  background-color: #384e6e !important;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  height: 30px;
  margin-right: 0px;
  padding: 5px 20px !important;
  text-transform: none;
`
export { SliderWrapper, ButtonSmall }
