import React from 'react'

import * as Styled from './styles'

function Time({ width, days, size }) {
  return (
    <Styled.Time size={size}>
      <div className="time">
        <span style={{ width: `${width}%` }} />
      </div>

      <div className="time-title">
        <p>
          {width}% concluido - {days} {days <= 1 ? 'dia' : 'dias'} restantes
        </p>
      </div>
    </Styled.Time>
  )
}

export default Time
