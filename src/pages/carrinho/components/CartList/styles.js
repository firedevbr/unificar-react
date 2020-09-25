import styled from 'styled-components'
import { lighten } from 'polished'

const ItemCart = styled.li`
  align-items: center;
  border: 1px solid #f5f5f5;
  -webkit-box-shadow: 0px 0px 1px #00000029;
  -moz-box-shadow: 0px 0px 1px #00000029;
  box-shadow: 0px 0px 1px #00000029;
  display: flex;
  justify-content: space-around;
  margin-left: 45px;
  padding: 10px 5px;

  & + li {
    margin-top: 15px;
  }

  img {
    border-radius: 2px;
    height: 70px;
    width: 100px;
  }

  .information {
    max-width: 350px;

    p {
      font-weight: 500;
      margin: 0;
    }

    span {
      color: #a6b1c3;
      font-size: 14px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: #cc6329;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: ${lighten(0.1, '#cc6329')};
    }
  }

  .price {
    p {
      color: #384e6e;
      font-size: 18px;
      font-weight: 600;
      margin: 0;

      i {
        margin-left: 5px;
      }
    }

    span {
      color: #a6b1c3;
      text-decoration: line-through;
    }
  }
`

export { ItemCart }
