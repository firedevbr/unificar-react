import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 4rem;
  background: #F7F7F7;

  .border-footer{
    border-bottom: 1px solid #384E6E;
    margin-bottom: 2rem;
  }

  .direitos{
      width: 100%;

      img{
        max-width: 213px;
        height: auto;
      }

      p{
        font-weight: 500;
        color: #000;
        font-size: 20px;
        line-height: 28px;
      }
    }

  .item-footer{
    width: 100%;
    margin-bottom: 4rem;

    h3{
      font-weight: bold;
      color: #000;
      font-size: 1.125rem;
      margin-bottom: 1.875rem;
    }

    ul{
      li{
        margin-bottom: 20px;

        a{
          font-weight: 500;
          color: #000;
          text-decoration: none;
        }
      }
    }

    .content-parceiros{
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      img{
        max-width: 100%;
        height: auto;
        margin-right: 20px;
        margin-bottom: 30px;
      }
    }
  }

  @media(min-width: 576px){
    padding-top: 8rem;
    padding-bottom: 8rem;

    .item-footer{
      margin-bottom: 1rem;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 576px){
    flex-direction: row-reverse;
  }
`
