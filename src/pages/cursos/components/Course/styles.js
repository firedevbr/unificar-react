import styled from 'styled-components'
import { lighten, shade } from 'polished'

const ItemCourse = styled.div`
  -webkit-box-shadow: 0px 0px 6px #00000029;
  -moz-box-shadow: 0px 0px 6px #00000029;
  box-shadow: 0px 0px 6px #00000029;
  height: 300px;
  margin: 0px 10px 30px;
  position: relative;
  width: 258px;

  img {
    height: 168px;
    width: 100%;
  }

  .item-body {
    padding: 10px 10px;

    h2 {
      color: #333333;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 2px;
      height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .instructor {
      color: #a6b1c3;
      font-size: 14px;
      margin-bottom: 5px;
    }

    .price {
      color: #cc6329;
      font-size: 16px;
      font-weight: 600;

      span {
        color: #a6b1c3;
        font-size: 14px;
        font-weight: 300;
        margin-left: 10px;
        text-decoration: line-through;
      }
    }
  }

  &:hover .course-details {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }

  @media (min-width: 1786px) {
    &:nth-child(5n) .course-details {
      left: -40%;
    }
  }

  @media (min-width: 1493px) and (max-width: 1785px) {
    &:nth-child(4n) .course-details {
      left: -40%;
    }
  }

  @media (min-width: 1054px) and (max-width: 1492px) {
    &:nth-child(3n) .course-details {
      left: -40%;
    }
  }
`

const ItemCourseDetails = styled.div`
  background-color: #fefefe;
  -webkit-box-shadow: 0px 0px 6px #00000029;
  -moz-box-shadow: 0px 0px 6px #00000029;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 5px;
  color: #3c3b37;
  font-size: 14px;
  left: 100%;
  opacity: 0;
  padding: 20px;
  position: absolute;
  top: -5%;
  transition: opacity 0.7s;
  visibility: hidden;
  width: 300px;

  h2 {
    color: #333333;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }

  .subtitle {
    span {
      background-color: #ffc107;
      border-radius: 5px;
      color: #fafafa;
      font-size: 13px;
      font-weight: 600;
      margin-right: 10px;
      padding: 5px 8px;
    }
    p {
      color: #a6b1c3;
      font-weight: 500;
      margin: 0;
    }
  }

  div {
    align-items: center;
    display: flex;
    margin-top: 20px;

    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }

    p {
      color: #a6b1c3;
      line-height: 16px;
      margin-left: 10px;
      strong {
        color: #333333;
      }
    }
  }

  > p {
    line-height: 16px;
    margin-top: 15px;
  }

  ul {
    margin-left: 15px;
    li {
      i {
        margin-right: 10px;
      }
    }
  }

  button {
    background-color: #384e6e;
    border: 0;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    height: 45px;
    width: 100%;

    &:hover {
      background-color: ${lighten(0.1, '#384e6e')};
    }
  }
`

export { ItemCourse, ItemCourseDetails }
