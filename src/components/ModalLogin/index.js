import React from "react";

import { MDBModal, MDBModalBody, MDBInput } from "mdbreact";

import * as Styled from "./styles";

function ModalLogin({ modalStatus, setModal, activeItem, setActiveItem }) {
  return (
    <MDBModal isOpen={modalStatus} toggle={() => setModal(false)} centered>
      <div className="new-modal">
        <MDBModalBody>
          <Styled.Tabs>
            <div className="tabs-header">
              <button
                className={activeItem === 1 ? "active" : ""}
                onClick={() => setActiveItem(1)}
              >
                Acessar o Club
              </button>
              <button
                className={activeItem === 2 ? "active" : ""}
                onClick={() => setActiveItem(2)}
              >
                Juntar-se ao clube
              </button>
            </div>

            <div className="tabs-body">
              {activeItem === 1 ? (
                <>
                  <div className="form-login">
                    <MDBInput label="E-mail" outline icon="envelope" />
                    <MDBInput label="Senha" outline icon="key" />
                    <button>Login</button>
                    <div className="form-login__remember">
                      <a href="#">Esqueceu sua senha</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-login">
                    <MDBInput label="CPF" outline icon="user" />
                    <MDBInput label="E-mail" outline icon="envelope" />
                    <MDBInput label="Senha" outline icon="key" />
                    <button>Solicitar</button>
                    <div className="form-login__remember"></div>
                  </div>
                </>
              )}
            </div>
          </Styled.Tabs>
        </MDBModalBody>
      </div>
    </MDBModal>
  );
}

export default ModalLogin;
