import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBar = ({total, atual}) => {
  const progress = Math.floor((atual/total) * 100)
  return (
    <>
      <MDBProgress className="my-2" material value={progress} color="success" />
    </>
  );
}

export default ProgressBar;
