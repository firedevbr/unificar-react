import styled from "styled-components";

export const BannerTop = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/images/chamada.png) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 40px;

  span {
    text-align: center;
    color: #fff;
    margin-bottom: 4rem;

    h2 {
      text-align: center;
      font-weight: bold;
      color: #ffffff;
      font-size: 2.5rem;
      text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    }

    p {
      display: block;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    }

    a {
      width: 100%;
      max-width: 248px;
      display: inline-block;
      background: #cc6329 0% 0% no-repeat padding-box;
      border-radius: 5px;
      text-align: center;
      letter-spacing: 0px;
      color: #ffffff;
      padding: 14px 0;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
      }
    }
  }

  @media (min-width: 768px) {
    span {
      margin-bottom: 12rem;

      h2 {
        font-size: 3.75rem;
      }

      p {
        font-size: 2.5rem;
      }

      a {
        max-width: 395px;
        font-size: 1.25rem;
        font-weight: 500;
        padding: 18px 0;
      }
    }
  }
`;
