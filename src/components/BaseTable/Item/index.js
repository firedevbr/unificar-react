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
import Router from "next/router";

export default function ({
  idCheckbox,
  urlImg,
  nameProduct,
  stock,
  price,
  discount,
  total,
  status,
  openModalDelete,
  enableCheckbox,
  showItemImage,
  columns,
  data
}) {
  return (
    <>
      <Styled.ProductItem>
        {enableCheckbox && (
          <td>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                id={idCheckbox}
              />
              <label className='custom-control-label' htmlFor={idCheckbox} />
            </div>
          </td>
        )}

        {columns.map((column, index) => {
          if (index === 0) {
            if (showItemImage) {
              return <td>
                <div className='item'>
                  <div className='item-img'>
                    <img src={urlImg} alt={data[column.field]} />
                  </div>
                  <div className='item-name'>
                    <Link href='/produtos/[id]' as='/produtos/abc'>
                      <p>{data[column.field]}</p>
                    </Link>
                  </div>
                </div>
              </td>
            }
          }

          if (column.field.includes('valor')) {
            return <td>
              <p>{data[column.field].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </td>
          }

          if (column.field === 'status') {
            const active = data[column.field] === 'ativo';
            return <td>
              <div className='item-status'>
                <span className={active ? 'ok' : 'error'}>
                  {active ? 'Ativa' : 'Inativa'}
                </span>
              </div>
            </td>
          }

          if (typeof data[column.field] === 'object') {
            return <td>
              <p>{data[column.field][column.child]}</p>
            </td>
          }

          return <td>
            <p>{data[column.field]}</p>
          </td>
        })}

        <td>
          <MDBDropdown dropleft>
            <MDBDropdownToggle color='flat'>
              <MDBIcon icon='angle-down' size='lg' />
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem onClick={() => Router.push(`/produtos/detalhes/${data.id}`)}>
                    Editar
              </MDBDropdownItem>
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
