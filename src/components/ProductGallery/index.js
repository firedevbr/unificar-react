import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

import { GalleryProduct, BadgePercent } from './styles'
import { getDiscountPercent } from '~/utils/utils'

const URL = 'http://localhost'
const slidePlaceHolder = `${URL}/assets/images/2020/07/22050670c8c11ee86d31cabbc94fc8b7.png`

const showSlide = (index) => {
  const slides = document.getElementsByClassName('slide')
  const thumbs = document.getElementsByClassName('slide-thumb')
  const dots = document.getElementsByClassName('dot')

  if (slides.length > 0) {
    Array.from(slides).forEach((slide) => slide.classList.add('hide'))
    Array.from(thumbs).forEach((thumb) => thumb.classList.remove('active'))
    Array.from(dots).forEach((dot) => dot.classList.remove('active'))
  }

  slides[index].classList.add('fade')
  slides[index].classList.remove('hide')
  thumbs[index].classList.add('active')
  thumbs[index].scrollIntoView(false)
  dots[index].classList.add('active')
}

const ProductGallery = ({
  campanha: { imagens: slides, ...dadosCampanha }
}) => {
  const [index, updateIndex] = useState(0)

  const changeSlide = (slideIndex) => {
    /** Prevents out of index on the slider */
    if (slideIndex > slides.length - 1) slideIndex = 0
    if (slideIndex < 0) slideIndex = slides.length - 1

    updateIndex(slideIndex)
    showSlide(slideIndex)
  }

  useEffect(() => {
    if (slides && slides.length > 0) {
      const principal = slides.findIndex((slide) => slide.imagem_principal)
      updateIndex(principal)
      showSlide(index)
    }
  }, [slides])

  const renderSlider = (slides) => (
    <GalleryProduct>
      <MDBContainer>
        <MDBRow>
          <MDBCol
            size="12"
            md="2"
            className="d-none d-md-flex flex-column align-items-center justify-content-center"
          >
            <MDBIcon
              icon="angle-up"
              size="2x"
              className="custom-blue slide-control"
              onClick={() => changeSlide(index - 1)}
            />
            <div className="thumb-wrapper">
              {slides &&
                slides.map((slide, idElement) => (
                  <img
                    key={idElement}
                    src={`${URL}${slide.caminho}`}
                    alt="thumbnail"
                    className="img-thumbnail slide-thumb"
                  />
                ))}
            </div>
            <MDBIcon
              icon="angle-down"
              size="2x"
              className="custom-blue slide-control"
              onClick={() => changeSlide(index + 1)}
            />
          </MDBCol>
          <MDBCol
            size="12"
            md="10"
            className="d-flex flex-row flex-md-column align-items-center slide-container"
          >
            <MDBIcon
              icon="angle-left"
              size="2x"
              className="custom-blue slide-control d-block d-md-none mr-3"
              onClick={() => changeSlide(index - 1)}
            />
            {slides &&
              slides.map((slide, idElement) => (
                <img
                  className="d-block w-100 slide hide"
                  key={idElement}
                  src={`${URL}${slide.caminho}`}
                />
              ))}
            <MDBIcon
              icon="angle-right"
              size="2x"
              className="custom-blue slide-control d-block d-md-none ml-3"
              onClick={() => changeSlide(index + 1)}
            />
            <BadgePercent>
              {getDiscountPercent(dadosCampanha.valor, dadosCampanha.produtos)}%
            </BadgePercent>
          </MDBCol>
          <MDBCol
            size="12"
            sm="12"
            className="d-flex d-md-none flex-row align-items-center justify-content-center"
          >
            {slides &&
              slides.map((slide, index) => (
                <span key={index} className="dot" />
              ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </GalleryProduct>
  )

  const renderNoImages = () => (
    <GalleryProduct>
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol
            size="12"
            md="12"
            className="d-flex flex-column align-items-center slide-container"
          >
            <figure className="figure">
              <img
                src={slidePlaceHolder}
                className="figure-img img-fluid d-block w-70 mt-5"
                alt=""
              />
              <figcaption className="figure-caption text-center">
                Sem imagens disponíveis
              </figcaption>
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </GalleryProduct>
  )

  return slides && slides.length ? renderSlider(slides) : renderNoImages()
}

export default ProductGallery
