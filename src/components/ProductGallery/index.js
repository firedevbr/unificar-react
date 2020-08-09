import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

import { GalleryProduct } from './styles'

const showSlide = (index) => {
  const slides = document.getElementsByClassName('slide')
  const thumbs = document.getElementsByClassName('slide-thumb')

  if (slides.length > 0) {
    Array.from(slides).forEach(slide => slide.classList.add('hide'))
    Array.from(thumbs).forEach(thumb => thumb.classList.remove('active'))
  }

  slides[index].classList.add('fade')
  slides[index].classList.remove('hide')
  thumbs[index].classList.add('active')
  thumbs[index].scrollIntoView(false)
}

const ProductGallery = () => {
  const [index, updateIndex] = useState(1)
  const [slides, updateSlides] = useState([
    'https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg',
    'https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg',
    'https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg',
    'https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg',
    'https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg',
    'https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg',
    'https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg',
    'https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg',
    'https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg',
  ])

  const changeSlide = (index) => {
    /** Prevents out of index on the slider */
    if (index > slides.length - 1) index = 0
    if (index < 0) index = slides.length - 1

    console.log(index)

    updateIndex(index)
    showSlide(index)
  }

  useEffect(() => {
    showSlide(index)
  }, [])

  return (
    <GalleryProduct>
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol size="12" md="2" className="d-flex flex-column align-items-center justify-content-center">
            <MDBIcon icon="angle-up" size="2x" className="custom-blue slide-control" onClick={() => changeSlide(index - 1)} />
            <div className="thumb-wrapper">
              {slides.map((slide, idElement) => (
                <img key={idElement} src={slide} alt="thumbnail" className="img-thumbnail slide-thumb" />
              ))}
            </div>
            <MDBIcon icon="angle-down" size="2x" className="custom-blue slide-control" onClick={() => changeSlide(index + 1)} />
          </MDBCol>
          <MDBCol size="12" md="10" className="d-flex flex-column align-items-center slide-container">
            {slides.map((slide, idElement) => (
              <img className="d-block w-100 slide hide" key={idElement} src={slide} />
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </GalleryProduct>
  )
}

export default ProductGallery
