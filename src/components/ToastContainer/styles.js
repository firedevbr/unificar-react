import styled, { css } from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  padding: 10px 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`

const toastTypeVariations = {
  info: css`
    background-color: #34b5e5;
    color: #fdfdfd;
  `,
  success: css`
    background-color: #384e6e;
    color: #fdfdfd;
  `,
  error: css`
    background-color: #cc6329;
    color: #fdfdfd;
  `
}

const Toast = styled.div`
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 240px;

  & + div {
    margin-top: 10px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  div {
    flex-grow: 1;
    margin: 0 5px;
    text-align: center;
    strong {
      font-size: 14px;
    }
  }

  button {
    align-items: flex-start;
    background-color: transparent;
    border: 0;
    color: inherit;
    display: flex;
    justify-content: center;
    padding: 0;
  }
`

export { Container, Toast }
