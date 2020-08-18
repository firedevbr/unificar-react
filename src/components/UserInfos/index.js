import React from 'react'

import * as Styled from './styles'

function UserInfos({ infos }) {
  return (
    <Styled.UserInfos>
      <div className="item-dados">
        <p>Nome:</p>
        <span>{infos && infos.nome}</span>
      </div>
      <div className="item-dados">
        <p>Endereço:</p>
        <span>{infos && infos.endereco}</span>
        <span>{infos && infos.bairro}</span>
      </div>
      <div className="item-dados">
        <p>Cidade:</p>
        <span>
          {infos && infos.cidade} - {infos && infos.estado}
        </span>
      </div>
      <div className="item-dados">
        <p>Documento:</p>
        <span>{infos && infos.documento}</span>
      </div>
      <div className="item-dados">
        <p>E-mail:</p>
        <span>{infos && infos.email}</span>
      </div>
      <div className="item-dados">
        <p>Telefone:</p>
        <span>{infos && infos.telefone}</span>
      </div>
      <div className="item-dados">
        <p>Tipo da conta:</p>
        <span>{infos && infos.tipoPessoa === 'F' ? 'Fisica' : 'Juridica'}</span>
      </div>
      <div className="item-dados">
        <p>Conta Ativa?</p>
        <span
          className={`status ${
            infos && infos.confirmado === true ? 'green' : 'red'
          }`}
        >
          {infos && infos.confirmado === true ? 'Ativa' : 'Desativada'}
        </span>
      </div>

      <div className="item-btn">
        <button>Editar Conta</button>
      </div>
    </Styled.UserInfos>
  )
}

export default UserInfos
