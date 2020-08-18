import styled from 'styled-components'

export const Time = styled.div`
  width: 100%;

  .time {
    width: 100%;
    background: #f0f2f7;
    height: 8px;
    display: flex;
    border-radius: 57px;
    overflow: hidden;

    span {
      height: 100%;
      background: #2ec701;
    }
  }

  .time-title {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    p {
      color: #abb6c7;
      font-style: italic;
    }
  }
`
