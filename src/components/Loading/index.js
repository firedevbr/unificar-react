import React from 'react'

import { Container, MDBSpinner } from 'mdbreact'
import { Wrapper } from './styles'

const Loading = () => {
  return (
    <Wrapper>
      <Container>
        <MDBSpinner className="custom-blue" />
      </Container>
    </Wrapper>
  )
}

export default Loading
