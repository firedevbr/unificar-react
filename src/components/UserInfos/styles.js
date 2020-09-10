import styled from 'styled-components'

export const UserInfos = styled.div`
  width: 100%;
  background: #f1f5f8;
  margin-top: 2rem;
  padding: 2rem 15px;
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .item-btn {
    width: 100%;
    text-align: right;
    padding-right: 15px;
    margin-top: 2rem;

    button {
      padding: 15px 30px;
      border-radius: 8px;
      background: #4057e3;
      color: #fff;
      border: 0;
    }
  }

  .item-dados {
    width: 100%;
    margin-bottom: 1rem;
    background: white;
    padding: 15px;
    border-radius: 8px;

    p {
      font-weight: bold;
      padding: 0;
      margin: 0;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: #4057e3;
    }

    span {
      display: block;

      &.status {
        display: inline-block;
        background: #444;
        padding: 5px 15px;
        border-radius: 5px;
        color: #fff;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (min-width: 992px) {
    .item-dados {
      width: calc(33.33% - 15px);
    }
  }
`
