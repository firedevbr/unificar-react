import styled from 'styled-components'

const GalleryProduct = styled.div`

  .slide-container {
    height: 460px;

    .slide {
      height: 90%;
      margin: auto;
      animation-fill-mode: forwards;
    }

    .hide {
      display: none !important;
    }

    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1s;
      animation-name: fade;
      animation-duration: 1s;
    }

    @-webkit-keyframes fade {
      from {opacity: .6}
      to {opacity: 1}
    }

    @keyframes fade {
      from {opacity: .6}
      to {opacity: 1}
    }
  }

  .img-thumbnail {
    border: none;
    margin: 5px 0;
  }

  .img-thumbnail.active {
    background-color: transparent;
    border: 1px solid #ffaa2b;
    border-radius: 4px;
  }

  .thumb-wrapper {
    height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .slide-control {
    cursor: pointer;

    &:hover {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
       transform: scale(1.2);
    }
  }

`
export { GalleryProduct }
