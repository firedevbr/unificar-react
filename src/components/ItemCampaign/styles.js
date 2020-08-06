import styled from "styled-components";

const ItemWrapper = styled.div`
  margin: 0px 10px 40px;
  width: 280px;
  -webkit-font-smoothing: antialiased !important;

  img {
    height: 181px;
    width: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
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
    margin-right: 0px;
  }

  p {
    margin: 0px;
  }
`
export { ItemWrapper, Price, Progress, ItemFooter }
