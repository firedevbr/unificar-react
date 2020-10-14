import styled from 'styled-components'

const Sidebar = styled.div`
  .logo {
    height: 76px;
    padding: 0 15px;
    margin-bottom: 2rem;

    img {
      width: 125px;
      padding: 0;
      padding-top: 0.5rem;
      padding-bottom: 0;
    }
  }

  .side-nav {
    background: #384c63;

    & .fa-angle-down.rotate-icon {
      top: 1.3rem;
      display: none;
    }

    & .collapsible {
      margin-top: 0;

      & .collapsible-body {
        ul {
          li {
            a {
              background: transparent;
              padding-left: 0;
            }
          }
        }
      }

      li {
        padding: 0 15px;

        a.collapsible-header {
          font-size: 0.8rem;
          font-weight: 300;
          color: #fff;

          i {
            font-size: 1.2rem;
            color: #fff;
            margin-top: -3px;
          }

          &.active {
            color: #fff;
            background: #ffaa2b;
            margin-bottom: 1rem;

            i {
              color: #fff;
            }

            & .fa-angle-down.rotate-icon {
              top: 1.3rem;
              display: inherit;
              color: #fff;
            }
          }

          &:hover {
            background-color: #34b5e5;
          }

          background: transparent;
          padding: 27px 0 27px 15px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          transition: background-color 0.2s;
        }

        .collapsible-body ul li {
          &:hover {
            background-color: #34b5e5;
            border-radius: 5px;
          }
        }
      }
    }
  }
`

const Navbar = styled.div`
  width: 100%;

  .navbar {
    padding-top: 5px;
    padding-bottom: 5px;

    ul {
      display: flex;
      align-items: center;
    }

    background: #384e6e;
    color: #fff;
    height: 76px;

    .navbar-nav .nav-item a {
      color: #fff;
      display: flex;
      align-items: center;
    }

    .navbar .navbar-nav .nav-item a::after,
    .dropdown-toggle::after {
      display: none;
    }

    .navbar-nav .nav-item .dropdown a.dropdown-item {
      color: #212529;
      font-weight: 400;
    }
  }
`

const CustomNavItem = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  margin-right: 1rem;

  .badge {
    align-items: center;
    display: flex;
    font-size: 12px !important;
    font-weight: 500;
    height: 15px !important;
    padding: 9px 5px !important;
  }

  .badge-danger {
    margin-right: 10px;
  }
`

const NavbarUser = styled.div`
  width: 100%;

  .navbar .navbar-nav .nav-item a::after,
  .dropdown-toggle::after {
    display: none;
  }

  .user-photo {
    margin-right: 15px;

    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
  }

  .user-name {
    p {
      padding: 0;
      margin: 0;
      font-size: 0.875rem;

      i {
        color: orange;
      }
    }
  }
`

export { Navbar, CustomNavItem, NavbarUser, Sidebar }
