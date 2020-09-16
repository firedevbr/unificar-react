import styled from 'styled-components'

const ModalWrapper = styled.div`
  .modal-header {
    background-color: #ff4444;
    color: #ffffff;
    padding-left: 30px;

    .modal-title {
      font-weight: 500;
    }

    .close {
      color: #ffffff;
      span {
        color: #ffffff;
      }
    }
  }

  .modal-body {
    text-align: center;
    div {
      align-items: center;
      color: #3a3a3a;
      display: flex;
      justify-content: center;
      min-height: 120px;
      padding: 0 5px;
    }
  }

  .modal-footer {
    justify-content: center;

    .btn-secondary {
      background-color: #ff4444 !important;
    }
  }
`

export { ModalWrapper }
