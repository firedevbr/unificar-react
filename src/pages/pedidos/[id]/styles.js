import styled from 'styled-components'
// rgba(173, 183, 200, 0.5);
const CampaingDetails = styled.div`
  --custom-lg-color: var(--bd-color, #f9f9f9);
  display: flex;
  margin: 10px 30px;
  padding: 5px;
  width: 100%;

  .table {
    border: none;
    border-collapse: separate;
    border-spacing: 0;

    tr:first-child {
      th {
        border-radius: 5px 0px 0px 0px;
      }

      td {
        border-radius: 0px 5px 0px 0px;
      }
    }

    tr:last-child {
      th {
        border-radius: 0px 0px 0px 5px;
      }

      td {
        border-radius: 0px 0px 5px 0px;
        border-bottom: 1px solid var(--custom-lg-color);
      }
    }

    td {
      border-top: 1px solid var(--custom-lg-color);
      border-right: 1px solid var(--custom-lg-color);
      li {
        list-style-type: none;
        padding-left: 5px;
      }
    }

    th {
      background-color: var(--custom-lg-color);
      border: none;
      color: #37474f;
      font-weight: 600;
      padding-left: 20px;
      vertical-align: middle;
      width: 20%;
    }

    td {
      border-top: 1px solid var(--custom-lg-color);
      border-right: 1px solid var(--custom-lg-color);
      li {
        list-style-type: none;
        padding-left: 5px;
      }
    }
  }

  th {
    background-color: var(--custom-lg-color);
    border: none;
    color: #37474f;
    font-weight: 600;
    vertical-align: middle;
    width: 20%;
  }

  td {
    border-top: 1px solid var(--custom-lg-color);
    border-right: 1px solid var(--custom-lg-color);
    li {
      list-style-type: none;
      padding-left: 5px;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`
const PaymentDetails = styled.div`
  margin: 10px 30px;
  padding: 5px;

  @media (max-width: 768px) {
    margin: 0px 0px 0px -35px;
    overflow-x: scroll;
    padding: 5px 15px;
    width: 100vw;

    .w-sm-helper {
      display: block;
      width: 130px;
    }
  }
`

const OrderContainer = styled.div`
  width: 100%;
  h2.title-orange {
    font-size: 24px;
  }
`
export { CampaingDetails, PaymentDetails, OrderContainer }
