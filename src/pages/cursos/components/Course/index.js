import React, { useCallback } from 'react'
import { MDBIcon } from 'mdbreact'
import { ItemCourse, ItemCourseDetails } from './styles'
import { useCart } from '~/context/CartContext'
import { useToast } from '~/context/ToastContext'

const Course = ({ course }) => {
  const { addToCart } = useCart()
  const { addToast } = useToast()

  const handleOnClick = useCallback((course) => {
    addToCart(course)
    addToast({
      type: 'success',
      text: 'Produto adicionado ao carrinho!'
    })
  }, [])

  return (
    <ItemCourse>
      <img src={course.img} className="img-fluid" alt="course cover" />
      <div className="item-body">
        <h2>{course.title}</h2>
        <p className="instructor">{course.instructor.name}</p>
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
      <ItemCourseDetails className="course-details">
        <h2>{course.title}</h2>
        <div className="subtitle">
          {course.bestseller && <span>bestseller</span>}
          <p>{`${course.duration} horas`}</p>
        </div>
        <div>
          <img src={course.instructor.img} alt="profile" />
          <p>
            Criado por <strong>{course.instructor.name}</strong>
          </p>
        </div>
        <p>{course.description}</p>
        <ul>
          {course.highlights.map((topic) => (
            <li>
              <MDBIcon className="blue-grey-text" icon="check" /> {topic}
            </li>
          ))}
        </ul>
        <button onClick={() => handleOnClick(course)} type="button">
          Adicionar ao Carrinho
        </button>
      </ItemCourseDetails>
    </ItemCourse>
  )
}

export default Course
