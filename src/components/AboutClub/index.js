import React from "react";

import { MDBRow, MDBCol } from "mdbreact";
import ModalLogin from "~/components/ModalLogin";

import * as Styled from "./styles";

function AboutClub({ modal, setModal, activeItem, setActiveItem }) {
  return (
    <Styled.About>
      <div className="container" id="como-funciona">
        <div className="title">
          <h2>Como funciona o Clube?</h2>
        </div>

        <ModalLogin
          modalStatus={modal}
          setModal={setModal}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <MDBRow>
          <MDBCol size="12" md="4">
            <div className="about-card">
              <div className="icon">
                <img src="images/file-alt.svg" alt="Icone Formulário" />
              </div>

              <div className="text">
                <h3>
                  Basta preencher o formulário na sessão "Faça parte do clube".
                </h3>
              </div>
            </div>
          </MDBCol>

          <MDBCol size="12" md="4">
            <div className="about-card">
              <div className="icon">
                <img src="images/print-search.svg" alt="Icone Procurar" />
              </div>

              <div className="text">
                <h3>
                  Fazemos uma análise rápida nos seus dados e confirmamos o
                  cadastro por email.
                </h3>
              </div>
            </div>
          </MDBCol>

          <MDBCol size="12" md="4">
            <div className="about-card">
              <div className="icon">
                <img src="images/smile-beam.svg" alt="Icone Sorriso" />
              </div>

              <div className="text">
                <h3>
                  Pronto, agora basta acessar as incríveis vantagens que o clube
                  unificar pode trazer.
                </h3>
              </div>
            </div>
          </MDBCol>

          <MDBCol size="12">
            <div className="register">
              <a
                onClick={() => {
                  setModal(true);
                  setActiveItem(2);
                }}
              >
                Cadastre-se já!
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </Styled.About>
  );
}

export default AboutClub;
