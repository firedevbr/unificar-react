import styled from 'styled-components'

export const TabsHeader = styled.div`
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    border: 0;
    margin-top: 0 !important;
    li {
      display: flex;
      flex: 1;
      a {
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        padding: 5px;
        border-bottom: 1px solid #aab5c6;
        color: #000;
        font-weight: 400;
        &.active {
          color: #4057e3 !important;
          border-bottom: 1px solid #4057e3;
        }
      }
    }
  }

  .tab-content{
    margin-top: 0;
    padding: 0 !important;
    padding-top: 1rem !important;
    color: #c0c8d5;
  }

  @media(min-width: 768px){
    ul{
      li{
        a{
          font-size: 1rem !important;
        }
      }
    }
  }
`
