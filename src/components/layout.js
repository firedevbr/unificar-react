import { useEffect } from "react";
import Navbar from "./Navbar";
import { MDBToastContainer as ToastContainer } from 'mdbreact';

function components({ user, children }) {
  return <Navbar>
    {children}
    <ToastContainer
      hideProgressBar={false}
      newestOnTop={true}
      autoClose={2000}
    />
    </Navbar>;
}

export default components;
