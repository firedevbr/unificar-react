import React, { useContext, useCallback, useState } from 'react'
import { v4 } from 'uuid'

import ToastContainer from '../components/ToastContainer'

const ToastContext = React.createContext({
  addToast: () => {},
  removeToast: () => {}
})

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  const addToast = useCallback((message) => {
    const toast = {
      id: v4(),
      ...message
    }
    setMessages((prevState) => [...prevState, toast])
  }, [])

  const removeToast = useCallback((id) => {
    setMessages((prevState) => {
      return prevState.filter((message) => message.id !== id)
    })
  }, [])
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be use within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
