import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import * as Styled from "./styles";

import { MDBRow, MDBCol } from "mdbreact";

function MenuTop({ setModal, setActiveItem }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(
    (_) => {
      const handleScroll = (_) => {
        if (window.pageYOffset > 150) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return (_) => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [scrolled]
  );

  const menuActive = () => {
    setMenu(!menu);
  };

  return (
    <Styled.Menu scrolled={scrolled}>
      <div className="container">
        <MDBRow>
          <MDBCol size="8" lg="3">
            {scrolled ? (
              <img src="images/logo-colorido.png" alt="" />
            ) : (
              <img src="images/logo.png" alt="" />
            )}
          </MDBCol>
          <MDBCol size="4" lg="9">
            <div className="hamburger-menu" onClick={menuActive}>
              <div className={`bar ${menu ? "animate" : ""}`}></div>
              <span>MENU</span>
            </div>

            <div
              className={`content-menu ${menu ? "content-menu-active" : ""}`}
            >
              <ul>
                <li className="item-hbg">
                  <Link
                    activeClass="active"
                    to="quem-somos"
                    spy={true}
                    smooth={true}
                    offset={-370}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    Quem somos
                  </Link>
                </li>
                <li className="item-hbg">
                  <Link
                    activeClass="active"
                    to="como-funciona"
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    Como funciona?
                  </Link>
                </li>
                <li className="item-hbg">
                  <a
                    onClick={() => {
                      setMenu(false)
                      setModal(true);
                      setActiveItem(1);
                    }}
                  >
                    Login
                  </a>
                </li>
                <li className="item-hbg">
                  <a
                    onClick={() => {
                      setMenu(false)
                      setModal(true);
                      setActiveItem(2);
                    }}
                  >
                    <button>Faça parte do clube!</button>
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </Styled.Menu>
  );
}

export default MenuTop;
