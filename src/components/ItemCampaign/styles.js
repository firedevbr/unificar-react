import styled from "styled-components";

const ItemWrapper = styled.div`
  cursor: pointer;
  margin: 0px 10px 40px;
  width: 280px;

  img {
    height: 181px;
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
  }
`

const Progress = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`

const Price = styled.p`
  font-weight: 500;
`
export { ItemWrapper, Price, Progress }
