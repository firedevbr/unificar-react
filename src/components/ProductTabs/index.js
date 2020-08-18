import React, { Component } from 'react'
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem } from 'mdbreact'

import * as Styled from './styles'

class TabsDefault extends Component {
  state = {
    activeItem: '1'
  }

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      })
    }
  }

  render() {
    return (
      <>
        <Styled.TabsHeader className="nav-tabs mt-5">
          <MDBNav className="nav-tabs mt-5">
            <MDBNavItem>
              <a
                link
                to="#"
                className={this.state.activeItem === '1' ? 'active' : ''}
                active={this.state.activeItem === '1'}
                onClick={this.toggle('1')}
                role="tab"
              >
                Regras e Instruções
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                link
                to="#"
                className={this.state.activeItem === '2' ? 'active' : ''}
                active={this.state.activeItem === '2'}
                onClick={this.toggle('2')}
                role="tab"
              >
                Características
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                link
                to="#"
                className={this.state.activeItem === '3' ? 'active' : ''}
                active={this.state.activeItem === '3'}
                onClick={this.toggle('3')}
                role="tab"
              >
                Indicação
              </a>
            </MDBNavItem>
          </MDBNav>
        </Styled.TabsHeader>

        <Styled.TabsHeader className="mb-md-5">
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              <p className="mt-2">
                1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <p className="mt-2">
                2Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
              <p>
                2Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <p className="mt-2">
                3Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </Styled.TabsHeader>
      </>
    )
  }
}
export default TabsDefault
