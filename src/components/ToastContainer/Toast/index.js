import React, { useEffect } from 'react'
import { MDBIcon } from 'mdbreact'
import { Container } from './styles'

import { useToast } from '~/context/ToastContext'

const icons = {
  info: <MDBIcon icon="info-circle" size={20} />,
  success: <MDBIcon far icon="check-circle" size={20} />,
  error: <MDBIcon icon="exclamation-circle" size={20} />
}

const Toast = ({ message, style }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToast])
  return (
    <Container type={message.type} style={style}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.text}</strong>
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <MDBIcon icon="times" />
      </button>
    </Container>
  )
}

export default Toast
