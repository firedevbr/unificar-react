import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import {
  MDBBadge,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav
} from 'mdbreact'
import * as Styled from './styles'
import useAuth from '../../context/auth'

const NavBar = ({ children, customMainClass }) => {
  const { user, loading, isAdmin } = useAuth()

  if (typeof window === 'undefined') {
    global.window = {}
  }

  const [toggleStateA, setToggleStateA] = useState(false)
  const [breakWidth, setBreakWidth] = useState(1300)
  const [windowWidth, setWindowWidth] = useState(0)
  const [sideOpen, setSideOpen] = useState(false)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return function cleanUp() {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)

    if (window.innerWidth > 1300) {
      setSideOpen(true)
    }
  }

  const handleToggleClickA = () => {
    setToggleStateA(!toggleStateA)
  }

  const navStyle = {
    paddingLeft: windowWidth > breakWidth ? '210px' : '16px'
  }
  const mainStyle = {
    margin: '0',
    paddingTop: '2.5rem',
    paddingLeft: windowWidth > breakWidth ? '146px' : '0'
  }
  const specialCaseNavbarStyles = {
    WebkitBoxOrient: 'horizontal',
    flexDirection: 'row'
  }

  return (
    <div className={`fixed-sn mdb-skin ${loading === true && 'd-none'}`}>
      <Styled.Sidebar>
        <MDBSideNav
          triggerOpening={toggleStateA}
          className={sideOpen ? 'fixed' : 'bb'}
        >
          <MDBSideNavNav>
            <div className="logo pl-4 pt-3">
              <img
                className="pointer"
                src="/images/logo-colorido.png"
                alt="Clube Unificar Logo"
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => Router.push('/')}
              />
            </div>

            <MDBSideNavCat
              name="Classificados"
              id="categoria-classificados"
              icon="handshake"
            >
              <MDBSideNavItem>Ver anúncios</MDBSideNavItem>
              <MDBSideNavItem>Anunciar</MDBSideNavItem>
            </MDBSideNavCat>

            <MDBSideNavCat
              name="Campanhas"
              id="categoria-campanhas"
              icon="store"
            >
              <MDBSideNavItem onClick={() => Router.push('/campanhas')}>
                Ver campanhas
              </MDBSideNavItem>
              <MDBSideNavItem>Pedidos Recentes</MDBSideNavItem>
            </MDBSideNavCat>

            <MDBSideNavCat name="Cursos" id="categoria-cursos" icon="book-open">
              <MDBSideNavItem>
                <Link href="/cursos">
                  <a>Ver cursos</a>
                </Link>
              </MDBSideNavItem>
              <MDBSideNavItem>Meus Cursos</MDBSideNavItem>
              <MDBSideNavItem>Enviar curso</MDBSideNavItem>
            </MDBSideNavCat>

            <MDBSideNavCat
              name="Consulta paciente"
              id="categoria-consulta-paciente"
              icon="user-shield"
            >
              <MDBSideNavItem>Consultar</MDBSideNavItem>
              <MDBSideNavItem>Cadastrar</MDBSideNavItem>
            </MDBSideNavCat>

            <MDBSideNavCat
              className={!isAdmin ? 'd-none' : ''}
              name="Admin"
              id="categoria-admin"
              icon="tachometer-alt"
            >
              <MDBSideNavItem onClick={() => Router.push('/admin/campanhas')}>
                Campanhas
              </MDBSideNavItem>
              <MDBSideNavItem onClick={() => Router.push('/admin/produtos')}>
                Produtos
              </MDBSideNavItem>
              <MDBSideNavItem
                onClick={() => Router.push('/admin/produtos/categorias')}
              >
                Produtos Categorias
              </MDBSideNavItem>
              <MDBSideNavItem
                onClick={() => Router.push('/admin/produtos/fornecedores')}
              >
                Fornecedores
              </MDBSideNavItem>
              <MDBSideNavItem onClick={() => Router.push('/admin/usuarios')}>
                Usuários
              </MDBSideNavItem>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </Styled.Sidebar>

      <Styled.Navbar>
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
          <MDBNavbarNav left>
            <MDBNavItem>
              <div
                onClick={handleToggleClickA}
                key="sideNavToggleA"
                style={{
                  lineHeight: '32px',
                  marginRight: '1em',
                  verticalAlign: 'middle'
                }}
              >
                <MDBIcon icon="bars" color="white" size="2x" />
              </div>
            </MDBNavItem>
            <MDBNavItem
              className="d-none d-md-inline"
              style={{ paddingTop: 5 }}
            />
          </MDBNavbarNav>
          <MDBNavbarNav right style={specialCaseNavbarStyles}>
            <MDBNavItem>
              <MDBDropdown>
                <Styled.NavbarNotification>
                  <MDBDropdownToggle nav caret>
                    <MDBBadge color="danger">3</MDBBadge>
                    <MDBIcon icon="bell" className="d-inline-inline" />
                  </MDBDropdownToggle>
                </Styled.NavbarNotification>
                <MDBDropdownMenu right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <Styled.NavbarUser>
                  <MDBDropdownToggle nav caret>
                    <div className="user-photo">
                      <img
                        src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2019/06/ratinho.jpg"
                        alt="user"
                      />
                    </div>
                    <div className="user-name">
                      <p>
                        Olá {user && user.nome}, <br />
                        minha conta <MDBIcon icon="angle-down" />
                      </p>
                    </div>
                  </MDBDropdownToggle>
                </Styled.NavbarUser>
                <MDBDropdownMenu right>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                  <MDBDropdownItem
                    onClick={() => Router.push('/minha-conta', '/minha-conta')}
                  >
                    Minha Conta
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </Styled.Navbar>
      <main className={customMainClass} style={mainStyle}>
        <div className="mt-5 ml-md-5 pl-md-5">{children}</div>
      </main>
    </div>
  )
}

export default NavBar
