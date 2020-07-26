import { useState, useEffect } from 'react'

import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBModal,
  MDBModalBody
} from 'mdbreact'

import ModalDelete from '../ModalDelete'
import ItemProduct from './components/ItemProduct'

import API from '../../services/api'

const BasicTable = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [campanhas, setCampanhas] = useState(null)

  const closeModalDelete = () => setDeleteModal(false)

  useEffect(() => {
    const token = localStorage.getItem("auth-jwt");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };


    API.get('campanhas', config).then((res) => setCampanhas(res.data.results))
  }, [])

  return (
    <>
      <MDBContainer fluid style={{ height: 2000 }}>

        <MDBModal
          isOpen={deleteModal}
          toggle={() => setDeleteModal(false)}
          centered
          size='lg'
        >
          <MDBModalBody>
            <ModalDelete closeModalDelete={closeModalDelete} />
          </MDBModalBody>
        </MDBModal>

        <MDBTable responsive className='table-products'>
          <MDBTableHead>
            <th></th>
            <th>Campanha</th>
            <th>Estoque</th>
            <th>Preço</th>
            <th>Desconto</th>
            <th>Total</th>
            <th>Status</th>
            <th>Icon</th>
          </MDBTableHead>
          <MDBTableBody>
            {campanhas && campanhas.map(item => (
              <>
                <ItemProduct
                  key={item.id}
                  idCheckbox={item.id}
                  urlImg='https://www.suryadental.com.br/media/catalog/product/cache/1/small_image/227x/9df78eab33525d08d6e5fb8d27136e95/0/0/009201000.jpg'
                  nameProduct={item.nome}
                  stock={item.quantidade_pedidos_necessarios}
                  price={item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  discount={item.valor_sinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  total={item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  status={item.status === 'ativo' ? true : false}
                  openModalDelete={setDeleteModal}
                />
              </>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  )
}

export default BasicTable
