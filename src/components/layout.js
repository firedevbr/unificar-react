import React from 'react'
import { MDBToastContainer as ToastContainer } from 'mdbreact'
import Navbar from './Navbar'

function components({ user, children }) {
  return (
    <Navbar>
      {children}
      <ToastContainer hideProgressBar={false} newestOnTop autoClose={2000} />
    </Navbar>
  )
}

export default components
