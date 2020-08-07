import React, { useState, useContext } from "react";
import { MDBRangeInput, MDBRow, MDBContainer, MDBBtn } from "mdbreact";

import { SliderWrapper } from './styles'
import CampaignContext from '~/context/campaign'

const SliderFilter = ({ name }) => {
  const [progress, setProgress] = useState(0)
  const { campaigns } = useContext(CampaignContext)
  console.log(campaigns)

  return (
    <MDBContainer>
        <SliderWrapper>
          <MDBRow>
            <div>
              <p>{name}</p>
              <MDBRangeInput
                min={0}
                max={100}
                value={progress}
                getValue={value => setProgress(value)}
              />
              <span className="progress-value ml-2">{progress} %</span>
            </div>
            <div className="slider-bottom">
              <button className="btn-link">Limpar Filtros</button>
              <MDBBtn outline color="primary" size="sm">Aplicar</MDBBtn>
            </div>
          </MDBRow>
        </SliderWrapper>
    </MDBContainer>
  );
}

export default SliderFilter;
