import React from 'react'

import * as Styled from './styles'

function ButtonNext(props) {
  return (
    <Styled.Button className={props.className} onClick={props.onClick}>
      {props.name}
    </Styled.Button>
  )
}

export default ButtonNext
