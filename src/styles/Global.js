import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        box-sizing: border-box;

    }

    html, body, #__next, .white-skin, main {
      height: 100%;
    }

    body {
      background: #FFF;
      line-height: 1.3;
      font-size: 100%;
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
          width: 8px;
      }
      ::-webkit-scrollbar-track {
          background-color: #eaeaea;
      }
      ::-webkit-scrollbar-thumb {
          background-color: #b0b0b0;
          border-radius: 6px;
          cursor: pointer;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #cc6329;
      }
    }

    a {
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    .modal-body{
      padding: 0 !important;
    }

    .table-products{
      thead{
        width: 100%;
        background: #f0f2f7;
        border-radius: 5px;

        th{
          border-bottom: none;
          color: #a6b1c3;

          &:first-child{
            border-radius: 5px 0 0 5px;
          }
          &:last-child{
            border-radius: 0  5px  5px 0;
          }
        }
      }


    }

    .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1500px;
    }
  }

  .custom-blue {
    color: #4057e3 !important;
  }

  .custom-orange {
    color: #ffaa2b !important;
  }

  .bg-custom-blue {
    background-color: #4057e3 !important;
  }

  .title-orange {
    color: #ffaa2b;
    font-weight: 600;
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .bg-custom-grey {
    background-color: #F5F8FA;
  }

  .scrollbar {
    overflow: scroll;
  }

  .scrollbar-only-y {
    overflow-x: hidden;
  }

  .scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.2);
  }

  /* custom colors  */
  .scrollbar-primary::-webkit-scrollbar {
    background-color: #F5F5F5;
  }
  .scrollbar-primary {
    scrollbar-color: #4285f4 #f5f5f5;
  }
  .scrollbar-primary::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #4285F4;
  }

  .curved {
    background: #ff3c00;
    color: #fff;
    text-align: center;
  }

  .curved h1 {
    font-size: 6rem;
    margin-top: 0;
  }

  .curved p {
    font-size: 1rem;
    margin: 0 5rem 0 5rem;
  }

  .curved svg {
    display: block
  }

  .curved.upper {
    background: #fff;
  }

  `

export default GlobalStyles
