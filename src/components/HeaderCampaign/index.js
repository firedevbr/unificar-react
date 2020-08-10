import React from "react";
import Link from "next/link";

import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

import * as Styled from "./styles";

function HeaderCampaign({ title, actions, search, filter}) {
  return (
    <Styled.Header>
      <MDBRow>
        <MDBCol size="12" lg="4">
          <div className="header-title">
            <h2>{title}</h2>
            {filter && <p>1.192 Total</p>}
          </div>
        </MDBCol>
        <MDBCol size="12" lg="8">
          <div className="header-aux">
            {search && (
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            )}
            {actions && (
              <>
                <select className="browser-default custom-select">
                  <option>Ações</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>

                <Link href="/nova-campanha">
                  <button>Nova Campanha</button>
                </Link>
              </>
            )}
          </div>
        </MDBCol>
      </MDBRow>
    </Styled.Header>
  );
}

export default HeaderCampaign;
