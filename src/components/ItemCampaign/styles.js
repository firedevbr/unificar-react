import styled from 'styled-components'

const ItemWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px #00000029;
  -moz-box-shadow: 0px 0px 6px #00000029;
  box-shadow: 0px 0px 6px #00000029;
  height: 347px;
  margin: 0px 10px 40px;
  position: relative;
  width: 258px;
  -webkit-font-smoothing: antialiased !important;

  img {
    border-bottom: 1px solid #f9f9f9;
    height: 181px;
    width: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    margin: 0px 0px 40px;
  }
`

const Progress = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
`

const Price = styled.p`
  color: #ffaa2b;
  font-size: 16px;
  font-weight: 600;

  span {
    font-size: 28px;
    margin-left: 3px;
  }
`

const ItemFooter = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  width: 90%;

  button.btn-primary {
    background-color: #384e6e !important;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
    height: 30px;
    padding: 5px 20px !important;
    text-transform: none;
  }

  p {
    margin: 0px;
  }
`

const ItemBody = styled.div`
  padding: 0px 15px;
`

const ItemHeader = styled.div`
  height: 50px;
`

const OriginalPrice = styled.p`
  color: #a6b1c3;
  font-size: 12px;
  font-weight: 300;
  ${(props) => (props.discount > 0 ? 'text-decoration: line-through;' : '')}
`
export {
  ItemWrapper,
  Price,
  Progress,
  ItemFooter,
  ItemBody,
  ItemHeader,
  OriginalPrice
}
