import React from 'react'

import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact'

import * as Styled from './styles'

export default function ({
  urlImg,
  nameProduct,
  code,
  date,
  quantity,
  total,
  status,
  openModalDelete
}) {
  return (
    <>
      <Styled.ProductItem>
        <td>
          <div className='item'>
            <div className='item-img'>
              <img src={urlImg} alt={nameProduct} />
            </div>
            <div className='item-name'>
              <p>{nameProduct}</p>
            </div>
          </div>
        </td>
        <td>
          <p>{code}</p>
        </td>
        <td>
          <p>{date}</p>
        </td>
        <td>
          <p>{quantity}</p>
        </td>
        <td>
          <p>{total}</p>
        </td>
        <td>
          <div className='item-status'>
            <span className={status ? 'ok' : 'error'}>
              {status ? 'Entregue' : 'Cancelado'}
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
