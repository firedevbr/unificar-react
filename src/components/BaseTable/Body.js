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
import Item from '~/components/BaseTable/Item';

import API from '../../services/api'

const BasicTable = ({resourceEndpoint, columns, handleUpdateTotalResults}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [resources, setResources] = useState(null);

  const closeModalDelete = () => setDeleteModal(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-jwt");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };


    API.get(resourceEndpoint, config).then((res) => {
      setResources(res.data.results);
      handleUpdateTotalResults(res.data.count);
    })
  }, []);

  return (
    <>
      <MDBContainer fluid>

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
            {columns.map(column => (
              <th>{column.label}</th>
            ))}
            <th>Icon</th>
          </MDBTableHead>
          <MDBTableBody>
            {resources && resources.map(item => (
              <>
                <Item
                  key={item.id}
                  idCheckbox={item.id}
                  urlImg='https://www.suryadental.com.br/media/catalog/product/cache/1/small_image/227x/9df78eab33525d08d6e5fb8d27136e95/0/0/009201000.jpg'
                  columns={columns}
                  data={item}
                  nameProduct={item.nome}
                  status={item.status === 'ativo'}
                  openModalDelete={setDeleteModal}
                  enableCheckbox={true}
                  showItemImage={true}
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
