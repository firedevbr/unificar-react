import { useState } from 'react';
import Layout from '~/components/layout'

import Title from '~/components/Title'
import Button from '~/components/Form/ButtonNext'

import { MDBRow, MDBCol } from "mdbreact";

const Campanha = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    const set = step + 1;
    setStep(set);
  }

  const backStep = () => {
    const set = step - 1;
    setStep(set);
  }

  return (
    <Layout>
      <Title className="mt-5 mb-5">Nova/Editar Campanha</Title>

      <div className="mt-5">

        {step === 1 &&
          <MDBRow>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nome da Campanha</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Produto da Campanha</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Valor do Sinal</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Valor do produto na campanha</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Data de início</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" md="4">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Data de término</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>
            </MDBCol>
            <MDBCol size="12" className="mt-5 d-flex justify-content-end">
              <Button name="Cancelar" className="border-on" />
              <Button name="Avançar" className="bg-on" onClick={nextStep} />
            </MDBCol>
          </MDBRow>
        }

        {step === 2 && <MDBRow>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">CEP</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Bairro</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Estado</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" md="4">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Complemento</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
          </MDBCol>
          <MDBCol size="12" className="mt-5 d-flex justify-content-end">
            <Button name="Voltar" className="border-on" onClick={backStep} />
            <Button name="Avançar" className="bg-on"  />
          </MDBCol>
        </MDBRow>}
      </div>

    </Layout>
  )
}

export default Campanha;
