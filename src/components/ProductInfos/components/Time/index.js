import React from 'react';

import * as Styled from './styles';

function Time({ width, days }) {
  return (
    <Styled.Time>
      <div className='time'>
        <span style={{ width: `${width}%` }}></span>
      </div>

      <div className='time-title'>
        <p>{width}% concluido - {days} {days <= 1 ? 'dia' : 'dias'} restantes</p>
      </div>
    </Styled.Time>
  );
}

export default Time;
