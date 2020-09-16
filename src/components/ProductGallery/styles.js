import styled from 'styled-components'

const GalleryProduct = styled.div`

  .slide-container {
    height: 460px;

    .slide {
      height: 90%;
      margin: auto;
      animation-fill-mode: forwards;

      @media(max-width: 768px) {
        margin: 0px 10px;
      }
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

    @media(max-width: 768px) {
      height: 410px;
      justify-content: space-evenly;
      margin-bottom: -35px;
      padding: 40px;
      width: 100%;
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
    max-height: 415px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .slide-control {
    cursor: pointer;

    @media(min-width: 769px) {
      &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }

  @media(max-width: 768px) {
    margin: -65px 0px 0px 0px;
    width: 100%;

    .slide-control {
      &:active {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
      }
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 14px;
    width: 14px;
    margin: 0 3px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active {
    background-color: #717171;
  }
`
const BadgePercent = styled.span`
  width: ${(props) => (props.size === 'small' ? '35px' : '50px')};
  height: ${(props) => (props.size === 'small' ? '35px' : '50px')};
  border-radius: 50%;
  color: #fff;
  background: #2ec701;
  font-size: ${(props) => (props.size === 'small' ? '13px' : '18px')};
  font-weight: bold;
  position: absolute;
  right: ${(props) => (props.position ? props.position.right : '18px')};
  top: ${(props) => (props.position ? props.position.top : '28px')};
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;

    right: ${(props) =>
      props.position ? props.position.mobile.right : '43px'};
    top: ${(props) => (props.position ? props.position.mobile.top : '63px')};
  }
`
export { GalleryProduct, BadgePercent }
