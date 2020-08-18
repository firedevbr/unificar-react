import styled from 'styled-components'

export const ProductItem = styled.tr`
  width: 100%;

  .custom-checkbox {
    width: 100%;
    display: flex;
    align-items: center;
  }

  td {
    &:nth-child(1) {
      min-width: 20px;
      width: 20px;
      display: flex;
      align-items: center;
    }

    min-width: 119px;

    p {
      margin: 0;
      padding: 0;
      margin-left: 5px;
      color: #aab5c6;
      padding-top: 1rem;
      cursor: pointer;
    }

    .dropdown {
      button {
        color: #aab5c6 !important;
      }

      &.show {
        button {
          color: #4057e3 !important;
        }
      }

      .dropdown-menu .dropdown-item {
        color: #4057e3 !important;
        text-align: center;
        font-weight: 500;

        &:hover {
          color: #fff !important;
        }
      }
    }
  }

  .item {
    min-width: 300px;
  }

  .item,
  .estoque {
    width: 100%;
    display: flex;
    align-items: center;

    .item-img {
      img {
        width: 65px;
      }
    }

    .item-name {
      p {
        padding-top: 0;
      }
    }
  }

  .item-status {
    width: 100%;
    display: flex;
    align-items: center;

    span {
      margin-top: 0.5rem;
      width: auto;
      min-width: 86px;
      max-width: 118px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      background: green;
      color: #fff;
      border-radius: 38px;
      text-transform: uppercase;
      font-weight: 400;

      &.ok {
        background: #2ec701;
      }

      &.error {
        background: #df7373;
      }
    }
  }
`
