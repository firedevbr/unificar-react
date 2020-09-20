import React, { useEffect, useState } from 'react'

import { MDBRow, MDBContainer, MDBCol, MDBIcon } from 'mdbreact'
import Layout from '~/components/layout'

import { ItemCourse, Courses, SearchBar } from './styles'

import coursesSample from './dummyData'

const Cursos = () => {
  const [courses, setCourses] = useState()
  const [searchError, setSearchError] = useState(false)
  const [filteredCourses, setFilteredCourses] = useState()

  useEffect(() => {
    setCourses(coursesSample)
    setFilteredCourses(coursesSample)
    console.log('run')
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const courseSearch = e.target.searchCourse.value

    if (!courseSearch) {
      setSearchError(true)
      return false
    }
    const result = courses.filter((course) =>
      course.title.toLowerCase().includes(courseSearch.toLowerCase())
    )

    setFilteredCourses(result)
  }
  return (
    <Layout>
      <MDBContainer fluid>
        <MDBRow>
          <SearchBar error={searchError}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="searchCourse"
                placeholder="buscar cursos"
              />
              <button type="submit">
                Buscar
                <MDBIcon icon="search" />
              </button>
            </form>
          </SearchBar>
          <MDBCol size="12" className="mt-5">
            <Courses>
              {filteredCourses &&
                filteredCourses.map((course, idx) => (
                  <ItemCourse key={idx}>
                    <img
                      src={course.img}
                      className="img-fluid"
                      alt="course cover"
                    />
                    <div>
                      <h2>{course.title}</h2>
                      <p className="instructor">{course.instructor}</p>
                      <span className="amber-text">
                        <MDBIcon size="xs" icon="star" />
                        <MDBIcon size="xs" icon="star" />
                        <MDBIcon size="xs" icon="star" />
                        <MDBIcon size="xs" icon="star" />
                        <MDBIcon size="xs" icon="star-half-alt" />
                      </span>
                      <p className="price">
                        {`R$ ${course.price}`}
                        <span>{`R$ ${course.originalPrice}`}</span>
                      </p>
                    </div>
                  </ItemCourse>
                ))}
            </Courses>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Cursos
