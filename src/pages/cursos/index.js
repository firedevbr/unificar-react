import React from 'react'

import { MDBRow, MDBContainer, MDBCol, MDBIcon } from 'mdbreact'
import Layout from '~/components/layout'
import Title from '~/components/Title'

import { ItemCourse, PageCover, Courses, SearchBar } from './styles'

const Cursos = () => {
  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>
          <PageCover>
            <img src="/images/cover2.jpg" className="img-fluid" alt="Cursos" />
          </PageCover>
          <SearchBar>
            <form>
              <input type="text" placeholder="buscar cursos" />
              <button type="submit">
                Buscar
                <MDBIcon icon="search" />
              </button>
            </form>
          </SearchBar>
          <MDBCol size="12" className="mt-5">
            <Courses>
              <ItemCourse>
                <img
                  src="/images/course1.png"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>A Really Nice Course Title That Goes for 2 Lines</h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 2000,00<span>R$ 3200,00</span>
                  </p>
                </div>
              </ItemCourse>
              <ItemCourse>
                <img
                  src="/images/course3.jpg"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>
                    A really nice course title that goes above 2 lines and hide
                    the rest
                  </h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 999,90<span>R$ 1499,99</span>
                  </p>
                </div>
              </ItemCourse>
              <ItemCourse>
                <img
                  src="/images/course2.jpg"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>A Really Nice Course Title</h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 1500,00<span>R$ 1999,99</span>
                  </p>
                </div>
              </ItemCourse>
              <ItemCourse>
                <img
                  src="/images/course1.png"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>A Really Nice Course Title That Goes for 2 Lines</h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 7467,90<span>R$ 5345,70</span>
                  </p>
                </div>
              </ItemCourse>
              <ItemCourse>
                <img
                  src="/images/course3.jpg"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>
                    A really nice course title that goes above 2 lines and hide
                    the rest
                  </h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 1899,90<span>R$ 2349,99</span>
                  </p>
                </div>
              </ItemCourse>
              <ItemCourse>
                <img
                  src="/images/course2.jpg"
                  className="img-fluid"
                  alt="course cover"
                />
                <div>
                  <h2>A Really Nice Course Title</h2>
                  <p className="instructor">Course Instructor</p>
                  <span className="amber-text">
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star" />
                    <MDBIcon size="xs" icon="star-half-alt" />
                  </span>
                  <p className="price">
                    R$ 6500,00 <span>R$ 6299,99</span>
                  </p>
                </div>
              </ItemCourse>
            </Courses>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Cursos
