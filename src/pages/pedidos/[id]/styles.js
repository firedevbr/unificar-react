import styled from 'styled-components'

const CampaingDetails = styled.div`
  display: flex;
  margin: 10px 30px;
  padding: 5px;
  width: 100%;

  .labels,
  .details {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 10px;

    li {
      padding: 10px;
      & + li {
        border-top: 1px solid #f9f9f9;
      }
    }

    ul {
      margin: 0;
    }
  }

  .labels {
    background-color: #f9f9f9;
    border-radius: 4px 0px 0px 4px;
    color: #37474f;
    font-weight: 600;
    width: 20%;
  }

  .details {
    border: 1px solid #f9f9f9;
    flex-grow: 1;

    li {
      ul {
        margin-top: -10px;
      }
    }
  }
`
const PaymentDetails = styled.div`
  margin: 10px 30px;
  padding: 5px;
  width: 100%;
`

const PageWrapper = styled.div`
  h2.title-orange {
    font-size: 24px;
  }
`
export { CampaingDetails, PaymentDetails, PageWrapper }
