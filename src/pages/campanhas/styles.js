import styled from 'styled-components'

const CampaignList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0px -24px 20px;
  padding: 0 20px;

  @media(max-width: 800px) {
    margin 0px 0 20px;
  }
`
const Divider = styled.div`
  width: 90%;
  margin: 20px auto;
  border-top: 1px solid #f5f5f5;
`
export {CampaignList, Divider}
