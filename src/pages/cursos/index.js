import React, { useEffect, useState } from 'react'

import { MDBRow, MDBContainer, MDBCol, MDBIcon } from 'mdbreact'
import Layout from '~/components/layout'
import Course from './components/Course'
import CartState from '~/context/CartState'

import { Courses, SearchBar } from './styles'

import coursesSample from './dummyData'

const Cursos = () => {
  const [courses, setCourses] = useState()
  const [searchError, setSearchError] = useState(false)
  const [filteredCourses, setFilteredCourses] = useState()

  useEffect(() => {
    setCourses(coursesSample)
    setFilteredCourses(coursesSample)
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
    <CartState>
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
                    <Course key={idx} course={course} />
                  ))}
              </Courses>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </CartState>
  )
}

export default Cursos
