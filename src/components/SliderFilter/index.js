import React from "react";
import { MDBRangeInput, MDBRow, MDBContainer } from "mdbreact";

import {SliderWrapper} from './styles'

const SliderFilter = ({ name }) => {
  return (
    <MDBContainer>
      <SliderWrapper>
        <MDBRow>
          <p>{name}</p>
          <span className="mr-2">0%</span>
          <MDBRangeInput
            min={0}
            max={100}
            value={0}
            formClassName="w-25"
          />
          <span className="ml-2">100%</span>
        </MDBRow>
      </SliderWrapper>
    </MDBContainer>
  );
}

export default SliderFilter;
