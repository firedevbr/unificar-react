import React from 'react'
import { MDBToastContainer as ToastContainer } from 'mdbreact'
import Navbar from './Navbar'

function components({ user, children, customMainClass }) {
  return (
    <Navbar customMainClass={customMainClass}>
      {children}
      <ToastContainer hideProgressBar={false} newestOnTop autoClose={2000} />
    </Navbar>
  )
}

export default components
