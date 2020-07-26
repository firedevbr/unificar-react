import { useState } from 'react'

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

const BasicTable = () => {
  const [deleteModal, setDeleteModal] = useState(false)

  const closeModalDelete = () => setDeleteModal(false)

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
            <th>Produto/Comprador</th>
            <th>Código</th>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Total</th>
            <th>Status</th>
            <th>Icon1</th>
          </MDBTableHead>
          <MDBTableBody>
            <ItemProduct
              urlImg='https://www.suryadental.com.br/media/catalog/product/cache/1/small_image/227x/9df78eab33525d08d6e5fb8d27136e95/0/0/009201000.jpg'
              nameProduct='Adesivo Adapter Single Bond 2 Combo - 3M'
              code='#001'
              date='12/01/2020'
              quantity='02'
              total='R$ 150,00'
              status="temos"
              openModalDelete={setDeleteModal}
            />
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  )
}

export default BasicTable
