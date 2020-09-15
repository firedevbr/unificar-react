import Head from 'next/head'
import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import ReactStars from 'react-rating-stars-component'

import {
  MDBBox,
  MDBInput,
  MDBCol,
  MDBSpinner,
  MDBRow,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBCardUp,
  MDBAvatar,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from 'mdbreact'
import Layout from '~/components/layout'

const ConsultaPaciente = () => {
  const [step, setStep] = useState(3)

  return (
    <Layout>
      <Head>
        <title>Consulta Paciente</title>
      </Head>
      {step === 1 && (
        <MDBBox flex="center">
          <MDBCol size="2">
            <form>
              <MDBInput size="lg" icon="id-card" hint="Ex: 000.000.000-00" />
            </form>
          </MDBCol>
        </MDBBox>
      )}
      {step === 2 && (
        <MDBBox flex="center">
          <MDBSpinner />
        </MDBBox>
      )}
      {step === 3 && (
        <MDBBox>
          <MDBCard testimonial>
            <MDBCardUp className="indigo lighten-1" />
            <MDBAvatar className="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                alt=""
              />
            </MDBAvatar>
            <MDBCardBody>
              <h4 className="card-title">Anna Doe</h4>
              <hr />
              <p>
                <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Eos, adipisci{' '}
                <MDBIcon icon="quote-right" />
              </p>
            </MDBCardBody>
          </MDBCard>
          <MDBRow className="mt-5 ">
            <MDBCol md="12" lg="4">
              <MDBTypography tag="h2" variant="h2" className="text-center">
                Serasa
              </MDBTypography>
              <MDBBox
                style={{ height: '600px' }}
                className="px-4 scrollbar scrollbar-primary scrollbar-only-y"
              >
                <MDBListGroup>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>ver mais</small>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">5 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">ver mais</small>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">10 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">ver mais</small>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBBox>
            </MDBCol>
            <MDBCol md="12" lg="4">
              <MDBTypography tag="h2" variant="h2" className="text-center">
                Jurídico
              </MDBTypography>
              <MDBBox
                style={{ height: '600px' }}
                className="px-4 scrollbar scrollbar-primary scrollbar-only-y"
              >
                <MDBListGroup>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>2 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>ver mais</small>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">6 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">ver mais</small>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover href="#" className="mt-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">20 dias atrás</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">ver mais</small>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBBox>
            </MDBCol>
            <MDBCol md="12" lg="4" className="px-5">
              <MDBTypography tag="h2" variant="h2" className="text-center">
                Rating Unificar
              </MDBTypography>
              <MDBBox
                style={{ height: '600px' }}
                className="px-4 scrollbar scrollbar-primary scrollbar-only-y"
              >
                <MDBRow className="d-flex justify-content-center mb-4">
                  <ReactStars
                    classNames="mt-3"
                    value={4.5}
                    edit={false}
                    count={5}
                    isHalf
                    size={28}
                    activeColor="#ffd700"
                  />
                </MDBRow>

                <MDBRow>
                  <li>
                    Idade: <b>24 anos</b>
                  </li>
                </MDBRow>
                <hr />

                <MDBRow>
                  <li>
                    Sexo: <b>masculino</b>
                  </li>
                </MDBRow>
                <hr />

                <MDBRow>
                  <li>
                    Preferência de pagamento: <b>Cartão de crédito</b>
                  </li>
                </MDBRow>
                <hr />
                <MDBRow>
                  <li>
                    Último procedimento: <b>Remoção do siso</b>
                  </li>
                </MDBRow>
                <hr />

                <MDBRow>
                  <li className="mb-2">Pagou corretamente</li>
                  <MDBProgress striped material color="success" value={100}>
                    <b className="font-weight-bold">100%</b>
                  </MDBProgress>
                </MDBRow>
                <hr />

                <MDBRow>
                  <li className="mb-2">Reclamou do serviço</li>
                  <MDBProgress striped material value={0}>
                    <b className="font-weight-bold black-text">0%</b>
                  </MDBProgress>
                </MDBRow>
                <hr />

                <MDBRow>
                  <li className="mb-2">Recomendariam o paciente</li>
                  <MDBProgress striped material color="success" value={98}>
                    <b className="font-weight-bold">98%</b>
                  </MDBProgress>
                </MDBRow>
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </MDBBox>
      )}
    </Layout>
  )
}

export default ConsultaPaciente
