import styled from 'styled-components'

const PageCover = styled.div`
  height: 430px;
  margin-left: -10px;
  margin-top: -15px;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: 257px;
    width: 100%;
    margin-left: 0;
    margin-top: -15px;
  }
`

const Courses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 0px 3% 20px;
  padding: 0px 20px;
  width: 95%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SearchBar = styled.div`
  align-items: center;
  background-color: #f5f8fa;
  display: flex;
  justify-content: center;
  height: 90px;
  margin-top: -15px;
  width: 100%;

  form {
    display: flex;
    justify-content: left;
    width: 50%;
  }

  input {
    border: 1px solid #ffffff;
    ${(props) => props.error && `border: 2px solid #cc6329;`}
    border-radius: 20px 0px 0px 20px;
    color: #a8a8b3;
    flex-grow: 1;
    font-weight: 300;
    height: 40px;
    padding-left: 20px;

    &:focus {
      border: 0;
      outline: none;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    align-items: center;
    background-color: #384e6e;
    border: 1px solid #384e6e;
    border-radius: 0px 20px 20px 0px;
    color: #f5f8fa;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    padding: 0px 20px;

    i {
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    margin-top: -15px;
    form {
      margin: 0px auto;
      width: 90%;
    }
  }
`
export { PageCover, Courses, SearchBar }
