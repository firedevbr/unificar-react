import styled from 'styled-components'

const CampaignList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0px 3% 20px;
  padding: 0 20px;
  width: 95%;

  @media (max-width: 800px) {
    margin: 0;
    padding: 0;
    justify-content: center;
  }
`
const Divider = styled.div`
  width: 90%;
  margin: 20px auto;
  border-top: 1px solid #f5f5f5;
`
const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 90vh;
  width: 100%;
`

export { CampaignList, Divider, Container }
