import React from 'react'

import * as Styled from './styles'

function Title({ children, className }) {
  return <Styled.Title className={className}>{children}</Styled.Title>
}

export default Title
