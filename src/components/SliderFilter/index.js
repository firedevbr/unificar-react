import React, { useState, useContext } from "react";
import { MDBRangeInput, MDBRow, MDBContainer, MDBBtn } from "mdbreact";

import { SliderWrapper } from './styles'
import CampaignContext from '~/context/campaign'
import { getProgressPercent } from '~/utils/utils'

const applyFilters = (progress, { campaigns, updateCampaignsList }) => {
  const filteredCampaigns = campaigns.filter((item) => {
    const itemProgress = getProgressPercent(
      item.quantidade_pedidos_confirmados,
      item.quantidade_pedidos_necessarios
    )
    return progress <= itemProgress
  })
  updateCampaignsList(filteredCampaigns)
}

const clearFilters = ({ campaigns, updateCampaignsList }) => {
  updateCampaignsList(campaigns)
}

const SliderFilter = ({ name }) => {
  const [progress, setProgress] = useState(0)
  const context = useContext(CampaignContext)

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
            <button className="btn-link" onClick={() => clearFilters(context)}>Limpar Filtros</button>
            <MDBBtn outline color="primary" size="sm" onClick={() => applyFilters(progress, context)}>Aplicar</MDBBtn>
          </div>
        </MDBRow>
      </SliderWrapper>
    </MDBContainer>
  );
}

export default SliderFilter;
