import React from 'react'
import Link from 'next/link'

import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact'

import * as Styled from './styles'

export default function ({
  idCheckbox,
  urlImg,
  nameProduct,
  stock,
  price,
  discount,
  total,
  status,
  openModalDelete
}) {
  return (
    <>
      <Styled.ProductItem>
        <td>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id={idCheckbox}
            />
            <label className='custom-control-label' htmlFor={idCheckbox}></label>
          </div>
        </td>
        <td>
          <div className='item'>
            <div className='item-img'>
              <img src={urlImg} alt={nameProduct} />
            </div>
            <div className='item-name'>
              <Link href='/produtos/[id]' as='/produtos/abc'>
                <p>{nameProduct}</p>
              </Link>
            </div>
          </div>
        </td>
        <td>
          <p>{stock}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <p>{discount}</p>
        </td>
        <td>
          <p>{total}</p>
        </td>
        <td>
          <div className='item-status'>
            <span className={status ? 'ok' : 'error'}>
              {status ? 'Ativa' : 'Inativa'}
            </span>
          </div>
        </td>
        <td>
          <MDBDropdown dropleft>
            <MDBDropdownToggle color='flat'>
              <MDBIcon icon='angle-down' size='lg' />
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Editar</MDBDropdownItem>
              <MDBDropdownItem onClick={() => openModalDelete(true)}>
                Deletar
              </MDBDropdownItem>
              <MDBDropdownItem>Inativar</MDBDropdownItem>
              <MDBDropdownItem>Ver detalhes</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </td>
      </Styled.ProductItem>
    </>
  )
}
