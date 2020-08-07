import styled from 'styled-components'

const SliderWrapper = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 15px;

  .row {
    align-items: center;

    p {
      margin: 10px 10px 10px 0px;
    }
  }

  .range-field input[type="range"]+.thumb {
    background-color: #4057e3;
  }

  input[type=range]::-webkit-slider-thumb {
    background-color: #4057e3;
  }

  input[type=range]::-moz-range-thumb {
    background-color: #4057e3;
  }

  input[type=range]::-ms-thumb {
    background-color: #4057e3;
  }

`

export { SliderWrapper }
