import styled from 'styled-components'

export const Title = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: ${props => props.border ? "1px solid rgba(173, 183, 200, 0.5)" : ""} ;
  margin-bottom: ${props => props.border ? "2rem" : ""};

  h2 {
    font-size: 1.3rem;
    color: #000;
    font-weight: 500;
  }

  p {
    font-size: 0.75rem;
    margin-top: 1rem;
    color: #adb7c8;
  }
`
