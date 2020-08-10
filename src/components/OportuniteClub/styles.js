import styled from "styled-components";

export const Oportunite = styled.div`
  background: url(/images/detalhe.png) no-repeat left #384e6e;
  background-size: cover;
  color: #fff;

  .img-chamada__mobile {
    width: 100%;
    height: 400px;
    background: url(/images/chamada2.png) no-repeat center;
    background-size: cover;
    margin-bottom: 3rem;
  }

  .img-chamada__desktop {
    display: none;
  }

  .text {
    padding-bottom: 2rem;

    h2 {
      color: #fff;
      font-size: 2.8rem;
      margin-bottom: 1rem;
      font-weight: 500;

      span {
        color: #eaad2a;
        font-weight: 600;
      }
    }

    p {
      font-size: 1.2rem;
      line-height: 35px;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 6rem;
    .img-chamada__mobile {
      display: none;
    }

    .img-chamada__desktop {
      display: inherit;
      background: url(/images/chamada2.png) no-repeat center;
      background-size: cover;
    }

    .text {
      padding-top: 6rem;
    }
  }

  @media (min-width: 992px) {
    .alinha {
      display: flex;
    }
    padding-bottom: 0rem;
    .img-chamada__mobile {
      display: none;
    }

    .img-chamada__desktop {
      display: inherit;
      width: 50%;
      margin-bottom: 0;
    }

    .text {
      width: 50%;
      padding-top: 6rem;
      padding-bottom: 6rem;

      h2 {
        font-size: 4rem;
        padding-right: 216px;
      }

      p {
        font-size: 1.5rem;
        padding-right: 139px;
      }
    }
  }
`;
