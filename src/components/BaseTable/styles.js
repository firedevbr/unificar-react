import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  margin-top: 5rem;
  .header-title {
    h2 {
      font-weight: bold;
      color: #000;
      font-size: 1.5rem;
      letter-spacing: 1.1px;
    }

    p {
      font-size: 1rem;
      color: #8798ad;
    }
  }

  .header-aux {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .form-group {
      margin: 0;
      width: 100%;

      .icon {
        position: absolute;
        left: 24px;
        top: 11px;
        z-index: 1;

        i {
          color: #a9b4c5;
        }
      }
    }

    input {
      position: relative;
      width: 100%;
      height: 37px;
      border-radius: 5px;
      border: 1px solid transparent;
      margin-bottom: 1rem;
      padding-left: 34px;
      display: block;
      background: url(/images/search.png) no-repeat left #f0f2f7;
      background-position: 8px 5px;

      &:hover,
      &:focus,
      &:active,
      &:focus:not([readonly]) {
        border: 1px solid transparent;
        box-shadow: none;
      }
    }

    select {
      width: 100%;
      height: 37px;
      border: 1px solid #4057e3;
      color: #4057e3;
      text-align: center;
      outline: 0;
      margin-bottom: 1rem;
      box-shadow: none;
    }

    button {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4057e3;
      color: #fff;
      border: 0;
      font-size: 0.875rem;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 768px) {
    .header-aux {
      justify-content: flex-end;
      .form-group {
        width: auto;
      }
      input {
        width: 390px;
      }

      select {
        width: 162px;
        margin-left: 15px;
      }

      button {
        margin-left: 15px;
      }
    }
  }
`
