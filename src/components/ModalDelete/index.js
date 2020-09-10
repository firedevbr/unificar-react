import React from 'react'

import * as Styled from './styles'

function ModalDelete({ closeModalDelete }) {
  return (
    <Styled.ModalDelete>
      <div className="title">
        <p>Tem certeza que gostaria de excluir esta campanha?</p>
      </div>

      <div className="buttons">
        <button className="cancel" onClick={closeModalDelete}>
          Cancelar
        </button>
        <button className="delete">Quero excluir</button>
      </div>
    </Styled.ModalDelete>
  )
}

export default ModalDelete
