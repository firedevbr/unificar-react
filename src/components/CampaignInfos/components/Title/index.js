import React from 'react';

import { Title as TitleStyle } from './styles'

const Title = ({ border, title }) => {
  return (
    <TitleStyle border={border}>
      <h2>{title}</h2>
    </TitleStyle>
  );
}

export default Title;
