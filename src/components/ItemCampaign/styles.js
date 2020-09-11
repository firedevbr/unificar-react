import styled from 'styled-components'

const ItemWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px #00000029;
  -moz-box-shadow: 0px 0px 6px #00000029;
  box-shadow: 0px 0px 6px #00000029;
  height: 347px;
  margin: 0px 50px 40px;
  width: 256px;
  -webkit-font-smoothing: antialiased !important;

  img {
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
  font-size: 18px;
  font-weight: 600;
`

const ItemFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button.btn-primary {
    background-color: #4057e3 !important;
    border-radius: 0px;
    font-size: 13px;
    height: 30px;
    margin-right: 0px;
    padding: 5px 10px !important;
    text-transform: none;
  }

  p {
    margin: 0px;
  }
`

const ItemBody = styled.div`
  padding: 0px 15px;
`
export { ItemWrapper, Price, Progress, ItemFooter, ItemBody }
