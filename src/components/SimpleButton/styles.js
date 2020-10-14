import styled, { css } from 'styled-components'
import { lighten } from 'polished'

const bgColors = {
  default: css`
    background-color: #384e6e;
    &:hover {
      background-color: ${lighten(0.1, '#384e6e')};
    }
  `,
  secondary: css`
    background-color: #cc6329;
    &:hover {
      background-color: ${lighten(0.1, '#cc6329')};
    }
  `
}

const Container = styled.button`
  ${(props) => bgColors[props.bgColor || 'default']};
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 0;
  width: 200px;
  transition: 0.2s background-color;
`

export { Container }
