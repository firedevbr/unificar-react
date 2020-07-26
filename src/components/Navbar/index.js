import Router from "next/router";

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
  MDBSideNav,
  MDBContainer,
} from "mdbreact";

import * as Styled from "./styles";

class Index extends React.Component {
  constructor(props) {
    super(props);

    if (typeof window === "undefined") {
      global.window = {};
    }
  }
  state = {
    toggleStateA: false,
    breakWidth: 1300,
    windowWidth: 0,
    sideOpen: false,
    hits: null,
  };

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    const cachedHits = localStorage.getItem("infos-user");

    if (cachedHits) {
      this.setState({ hits: JSON.parse(cachedHits) });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });

    if (window.innerWidth > 1300) {
      this.setState({
        sideOpen: true,
      });
    }
  };

  handleToggleClickA = () => {
    const { toggleStateA } = this.state;
    this.setState({
      toggleStateA: !toggleStateA,
    });
  };

  render() {
    const { breakWidth, toggleStateA, windowWidth, sideOpen } = this.state;

    const navStyle = {
      paddingLeft: windowWidth > breakWidth ? "210px" : "16px",
    };
    const mainStyle = {
      margin: "0 6%",
      paddingTop: "2.5rem",
      paddingLeft: windowWidth > breakWidth ? "146px" : "0",
    };
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row",
    };
    return (
      <div className="fixed-sn white-skin">
        <Styled.Sidebar>
          <MDBSideNav
            triggerOpening={toggleStateA}
            className={sideOpen ? "fixed" : "bb"}
          >
            <MDBSideNavNav>
              <div className="logo pl-5 pt-3">
                <img
                  className={"pointer"}
                  src="/images/logo-colorido.png"
                  alt="Clube Unificar Logo"
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={() => Router.push('/')}
                />
              </div>

              <MDBSideNavCat
                name="Classificados"
                id="categoria-classificados"
                icon="handshake"
              >
                <MDBSideNavItem>
                  Ver anúncios
                </MDBSideNavItem>
                <MDBSideNavItem>
                  Anunciar
                </MDBSideNavItem>
              </MDBSideNavCat>

              <MDBSideNavCat
                name="Campanhas"
                id="categoria-campanhas"
                icon="store"
              >
                <MDBSideNavItem>
                  Ver campanhas
                </MDBSideNavItem>
                <MDBSideNavItem>
                  Pedidos Recentes
                </MDBSideNavItem>
              </MDBSideNavCat>

              <MDBSideNavCat
                name="Cursos"
                id="categoria-cursos"
                icon="book-open"
              >
                <MDBSideNavItem>
                  Ver cursos
                </MDBSideNavItem>
                <MDBSideNavItem>
                  Meus Cursos
                </MDBSideNavItem>
                <MDBSideNavItem>
                  Enviar curso
                </MDBSideNavItem>
              </MDBSideNavCat>

              <MDBSideNavCat
                name="Consulta paciente"
                id="categoria-consulta-paciente"
                icon="user-shield"
              >
                <MDBSideNavItem onClick={() => Router.push("/admin/campanhas")}>
                  Campanhas
                </MDBSideNavItem>
                <MDBSideNavItem onClick={() => Router.push("/produtos")}>
                  Produtos
                </MDBSideNavItem>
              </MDBSideNavCat>

              <MDBSideNavCat
                name={this.state.hits && this.state.hits.funcao}
                id="contact-me-cat"
                icon="tachometer-alt"
              >
                <MDBSideNavItem onClick={() => Router.push("/admin/campanhas")}>
                  Campanhas
                </MDBSideNavItem>
                <MDBSideNavItem onClick={() => Router.push("/admin/produtos")}>
                  Produtos
                </MDBSideNavItem>
                <MDBSideNavItem onClick={() => Router.push("/admin/produtos/categorias")}>
                  Produtos Categorias
                </MDBSideNavItem>
                <MDBSideNavItem onClick={() => Router.push("/admin/produtos/fornecedores")}>
                  Fornecedores
                </MDBSideNavItem>
                <MDBSideNavItem onClick={() => Router.push("/admin/usuarios")}>
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
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle",
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
                          Olá {this.state.hits && this.state.hits.nome}, <br />
                          minha conta <MDBIcon icon="angle-down" />
                        </p>
                      </div>
                    </MDBDropdownToggle>
                  </Styled.NavbarUser>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                    <MDBDropdownItem
                      onClick={() =>
                        Router.push(
                          "/minha-conta",
                          "/minha-conta"
                        )
                      }
                    >
                      Minha Conta
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </Styled.Navbar>
        <main style={mainStyle}>
          <div className="mt-5">{this.props.children}</div>
        </main>
      </div>
    );
  }
}

export default Index;
