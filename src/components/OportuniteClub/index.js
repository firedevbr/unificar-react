import React from "react";

import * as Styled from "./styles";

function OportuniteClub() {
  return (
    <Styled.Oportunite>
      <div className="img-chamada__mobile"></div>
      <div className="container">
        <div className="alinha">
          <div className="text">
            <h2>
              Nós temos as melhores oportunidades <span>para você!</span>
            </h2>
            <p className="tagline">
              Somos o parceiro ideal para te acompanhar e ajudar em todas as
              suas conquistas. De forma responsável e transparente, nós vamos,
              juntos, organizar a sua vida financeira.
            </p>
          </div>

          <div className="img-chamada__desktop"></div>
        </div>
      </div>
    </Styled.Oportunite>
  );
}

export default OportuniteClub;
