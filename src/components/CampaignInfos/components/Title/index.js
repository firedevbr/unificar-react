import React from 'react';

import { Title as TitleStyle } from './styles'

const Title = ({ border, title }) => {
  return (
    <TitleStyle border={border}>
      <h2>{title}</h2>
      <p>Porto Alegre, Rio Grande do Sul | Cod. de Referência: 101148</p>
    </TitleStyle>
  );
}

export default Title;
