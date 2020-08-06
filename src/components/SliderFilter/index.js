import React from "react";
import { MDBRangeInput, MDBRow, MDBContainer } from "mdbreact";

const SliderFilter = () => {
    return (
      <MDBContainer>
        <MDBRow className="mt-5">
          <span className="font-weight-bold mr-2">0%</span>
          <MDBRangeInput
            min={0}
            max={100}
            value={50}
            formClassName="w-50"
          />
          <span className="font-weight-bold ml-2">100%</span>
        </MDBRow>
      </MDBContainer>
    );
}

export default SliderFilter;
