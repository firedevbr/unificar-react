import styled from "styled-components";

export const Tabs = styled.div`
  width: 100%;

  .new-modal{
    padding: 0 !important;
  }

  .tabs-header {
    width: 100%;
    display: flex;

    button {
      flex: 1;
      background: #d2d8d8;
      border: 0;
      outline: 0;
      height: 48px;
      color: #9fa7a9;
      font-weight: 500;
      font-size: 0.875rem;

      &.active {
        background: #fbfbfb;
        color: #7d8180;
      }
    }
  }

  .form-login{
    width: 100%;
    padding: 0 15px;

    button{
      width: 100%;
      background: #cc6230;
      border-radius: 5px;
      color: #fff;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      padding: 11px 0;
      display: block;
      border: 0;
      outline: 0;
    }

    &__remember{
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;

      a{
        text-decoration: underline;
        color: #cc6230;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`;
