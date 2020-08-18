import styled from 'styled-components'

export const Sidebar = styled.div`
  .logo {
    height: 62px;
    padding: 0 15px;
    border-bottom: 1px solid #f5f7fc;
    margin-bottom: 2rem;

    img {
      width: 125px;
      padding: 0;
      padding-top: 0.5rem;
      padding-bottom: 0;
    }
  }

  .side-nav {
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
        margin-bottom: 1.5rem;

        a.collapsible-header {
          font-weight: bold;
          font-size: 1rem;
          color: #000;

          i {
            font-size: 1.2rem;
            color: #4057e3;
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

          background: transparent;
          padding: 27px 0 27px 15px;
          display: flex;
          align-items: center;
          border-radius: 5px;
        }
      }
    }
  }
`

export const Navbar = styled.div`
  width: 100%;

  .navbar {
    padding-top: 5px;
    padding-bottom: 5px;

    ul {
      display: flex;
      align-items: center;
    }

    background: #4057e3;
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
  }
`

export const NavbarNotification = styled.div`
  width: 100%;
  margin-right: 1rem;

  .badge-danger {
    margin-right: 10px;
  }

  i {
    font-size: 1.5rem;
  }
`

export const NavbarUser = styled.div`
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
