import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  z-index: 9999;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .preloader-wrapper .spinner-blue,
  .preloader-wrapper .spinner-blue-only {
    border-color: #4057e3;
  }
`

export { Wrapper }
