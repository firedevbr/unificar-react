import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.scrolled ? "0" : "2rem")};
  background: ${(props) => (props.scrolled ? "white" : "")};
  padding: ${(props) => (props.scrolled ? "20px 0" : "")};
  box-shadow: ${(props) => (props.scrolled ? "0px 2px 8px rgba(0,0,0,.4)" : "")};

  position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  z-index: 10;
  transition: ${(props) =>
    props.scrolled ? "all 0.5s ease-in" : "all 0.3s ease"};

  img {
    max-width: 182px;
    height: auto;
  }

  .hamburger-menu {
    position: relative;
    margin: 14px auto 0 auto;
    width: 55px;
    height: 25px;
    cursor: pointer;
    z-index: 10;
    line-height: 22px;

    & span {
      color: #cc6329;
      display: block;
      width: 100%;
      font-size: 0.875em;
      padding-top: 29px;
      font-size: 0.8em;
      text-align: center;
      overflow: hidden;
      transition: width 0.25s 0.35s, color 0.45s 0.35s;
    }
  }

  .bar {
    position: relative;
    transform: translateY(12px);
    background: #cc6329;
    transition: all 0ms 300ms;
    width: 50px;
    height: 2px;

    &:after,
    &:before {
      width: 50px;
      height: 2px;
    }

    &.animate {
      background: rgba(255, 255, 255, 0);

      &:after {
        top: 0;
        transform: rotate(45deg);
        transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
          transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }

      &:before {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
          transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 12px;
      background: #cc6329;
      transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 12px;
      background: #cc6329;
      transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }

  .content-menu-active {
    transform: translateX(-100%);
  }

  .content-menu {
    position: fixed;
    background-color: #cc6329;
    background-color: rgba(255, 255, 255, 0.8);
    padding-top: 125px;
    transition: width 475ms ease-out, transform 450ms ease,
      border-radius 0.8s 0.1s ease;
    color: #cc6329;
    top: 0;
    height: 100%;
    text-align: center;
    width: 100%;
    right: -100%;
    cursor: default;
    box-sizing: border-box;
    padding: 50px;
    -o-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -khtml-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
    z-index: 3;

    & ul {
      margin: 0;
      margin-top: 121px;
      padding: 0;
      cursor: default;
    }

    & li {
      list-style: none;
      cursor: default;
      margin-bottom: 10px;
    }
  }

  .item-hbg {
    cursor: pointer;
    text-decoration: none;
    color: #cc6329;
    text-align: center;
    display: block;
    font-weight: 500;
    padding: 0.4rem;
    font-size: 1.31rem;
    & a {
      color: #cc6329;
      text-decoration: none;

      button {
        border-radius: 5px;
        background: #cc6329;
        color: #fff;
        font-weight: 500;
        padding: 9px 30px;
        border: none;
        outline: 0;
        transition: all 0.3s linear;
        font-size: 1.2rem;

        &:hover {
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .hamburger-menu {
      display: none;
    }

    .content-menu-active {
      transform: translateX(0);
    }

    .content-menu {
      position: relative;
      left: 0;
      top: 0;
      padding: 0;
      background: transparent;
      -o-transition: all 0s linear;
      -moz-transition: all 0s linear;
      -khtml-transition: all 0s linear;
      -webkit-transition: all 0s linear;
      -ms-transition: all 0s linear;
      transition: all 0s linear;

      ul {
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 0.4rem;

        & li {
          margin-right: 21px;

          &:last-of-type {
            margin-right: 0;
          }

          a {
            color: ${(props) => (props.scrolled ? "#cc6329" : "#fff")};
          }
        }
      }
    }
  }
`;
