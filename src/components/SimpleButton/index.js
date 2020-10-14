import React from 'react'

import { Container } from './styles'

const SimpleButton = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  )
}

export default SimpleButton
