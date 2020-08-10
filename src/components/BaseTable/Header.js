import React, { Component } from 'react'
import Link from 'next/link';

import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'

import * as Styled from './styles'

function BaseTableHeader ({title, actions, total, newResource}){
    return (
      <Styled.Header>
        <MDBRow>
          <MDBCol size='12' lg='4'>
            <div className='header-title'>
              <h2>{title}</h2>
              <p>{total} filtrados</p>
            </div>
          </MDBCol>
          <MDBCol size='12' lg='8'>
            <div className='header-aux'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput'
                />
              </div>
              {actions && (
                <>
                  <select className='browser-default custom-select'>
                    <option>Ações</option>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                  </select>
                </>
              )}
              {newResource && (
                <>
                  <Link href={newResource.linkTo}>
                    <button>{newResource.label}</button>
                  </Link>
                </>
              )}
            </div>
          </MDBCol>
        </MDBRow>
      </Styled.Header>
    )
}

export default BaseTableHeader
