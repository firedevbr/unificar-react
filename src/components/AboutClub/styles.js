import styled from "styled-components";
import { lighten } from "polished";

export const About = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #f5f2f4;

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 1.8rem;
      color: #000000;
      font-weight: 500;
    }
  }

  .about-card {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;

    .icon {
      background: red;
      text-align: center;
      width: 139px;
      height: 139px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #384e6e;
      margin-bottom: 2rem;

      img {
        max-width: 74px;
      }
    }

    .text {
      width: 100%;
      text-align: center;

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #000000;
      }
    }
  }

  .register {
    width: 100%;
    text-align: center;
    a {
      display: inline-block;
      max-width: 395px;
      width: 100%;
      background: #cc6329;
      color: #fff;
      text-decoration: none;
      padding: 18px;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 24px;
      border-radius: 5px;
      transition: all .5s ease;

      &:hover {
        color: #fff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
      }
    }
  }

  @media (min-width: 576px) {
    padding-top: 8rem;
    padding-bottom: 8rem;

    .title {
      margin-bottom: 7rem;
      h2 {
        font-size: 2.8rem;
      }
    }

    .about-card {
      margin-bottom: 8rem;
    }
  }
`;
