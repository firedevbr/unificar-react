import React from 'react'
import { MDBIcon } from 'mdbreact'
import { useToast } from '~/context/ToastContext'

import { Container, Toast } from './styles'

const ToastContainer = ({ messages }) => {
  const { removeToast } = useToast()
  return (
    <Container>
      {messages &&
        messages.map((message) => (
          <Toast key={message.id} type={message.type}>
            <MDBIcon icon="info-circle" size={20} />
            <div>
              <strong>{message.text}</strong>
            </div>
            <button type="button" onClick={() => removeToast(message.id)}>
              <MDBIcon icon="times" />
            </button>
          </Toast>
        ))}
    </Container>
  )
}

export default ToastContainer
