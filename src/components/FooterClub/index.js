import React from "react";
import Link from "next/link";

import { MDBRow, MDBCol } from "mdbreact";

import * as Styled from "./styles";

function FooterClub() {
  return (
    <Styled.Footer>
      <div className="container">
        <Styled.Flex>
          <MDBCol size="12" lg="8" xl="9">
            <MDBCol size="12" className="border-footer">
              <MDBRow>
                <MDBCol size="12" md="4" xl="3">
                  <div className="item-footer">
                    <h3>Descubra</h3>

                    <ul>
                      <li>
                        <Link href="/">
                          <a>Quem Somos</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a>Como funciona o Clube?</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a>Faça parte do Clube</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol size="12" md="4" xl="3">
                  <div className="item-footer">
                    <h3>Contato</h3>

                    <ul>
                      <li>
                        <Link href="/">
                          <a>email@unificar.com.br</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a>(00) 0 0000-0000</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a>Fale Conosco</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol size="12" md="4" xl="6">
                  <div className="item-footer">
                    <h3>Parceiros</h3>

                    <div className="content-parceiros">
                      <img src="images/unimed.png" alt="Unimed" />
                      <img src="images/colgate.png" alt="Colgate" />
                      <img src="images/itau.png" alt="Itau" />
                      <img src="images/bb.png" alt="Banco do Brasil" />
                      <img src="images/google.png" alt="Google" />
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol size="12">
              <MDBRow>
                <MDBCol size="12" lg="8" xl="6">
                  <div className="item-footer">
                    <h3>Certificações</h3>

                    <div className="content-parceiros">
                      <img
                        src="images/certificada.png"
                        alt="Empresa Certificada"
                      />
                      <img
                        src="images/greatplace.png"
                        alt="Great Place to Work"
                      />
                      <img src="images/ssl.png" alt="Site Seguro" />
                    </div>
                  </div>
                </MDBCol>

                <MDBCol size="12" lg="4" xl="6">
                  <div className="item-footer">
                    <h3>Nossas Redes</h3>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>

          <MDBCol size="12" lg="4" xl="3">
            <div className="direitos">
              <img src="images/logo-footer.png" alt="Unifar Club" />
              <p>
                Todos os direitos reservados <br></br> @unificar.club
              </p>

              <p>Porto Alegre, Brasil</p>
            </div>
          </MDBCol>
        </Styled.Flex>
      </div>
    </Styled.Footer>
  );
}

export default FooterClub;
