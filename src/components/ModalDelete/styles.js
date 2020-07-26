import styled from 'styled-components'

export const ModalDelete = styled.div`
  width: 100%;
  padding: 3rem 25px;

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

    p {
      padding: 0;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 400;
      color: #000;
    }
  }

  .buttons {
    width: 100%;
    display: flex;

    button {
      flex: 1;
      margin: 0 10px;
      height: 43px;
      border-radius: 5px;
      font-weight: 400;
      transition: .2s all linear;
      &:hover {
        box-shadow: 0px 2px 8px #4057e3;
      }

      &.cancel {
        border: 1px solid #4057e3;
        color: #4057e3;
        background: transparent;
      }

      &.delete {
        border: 1px solid #4057e3;
        color: #fff;
        background: #4057e3;
      }
    }
  }
`
