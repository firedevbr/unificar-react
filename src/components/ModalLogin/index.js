import React, {useState} from "react";

import { MDBModal, MDBModalBody, MDBInput } from "mdbreact";

import * as Styled from "./styles";
import useAuth from "~/context/auth";

function ModalLogin({ modalStatus, setModal, activeItem, setActiveItem }) {

  const { login } = useAuth();
  const [cpf, setCpf] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogin = (event) => {
    event.preventDefault();
    login(cpf, password);
  };

  const handleChangeCpf = (event) => {
    setCpf(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

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
                <form onSubmit={submitLogin}>
                  <div className="form-login">
                    <MDBInput 
                        label="CPF"
                        onChange={handleChangeCpf}
                        name={'cpf'}
                        outline 
                        icon="id-card" 
                      />
                    <MDBInput
                      type="password"
                      onChange={handleChangePassword}
                      name={'password'}
                      label="Senha" 
                      outline 
                      icon="key" 
                    />
                    <button>Login</button>
                    {/* <div className="form-login__remember">
                      <a href="#">Esqueceu sua senha</a>
                    </div> */}
                  </div>
                </form>
              ) : (
                <>
                  <div className="form-login">
                    <MDBInput label="CPF" outline icon="id-card" />
                    <MDBInput label="E-mail" outline icon="envelope" />
                    <MDBInput label="Senha" outline icon="key" />
                    <button type="submit">Solicitar</button>
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
