import React from "react";
import { MDBProgress } from 'mdbreact';

import { getProgressPercent } from '~/utils/utils'

const ProgressBar = ({ total, atual }) => {
  const progress = getProgressPercent(atual, total)
  return (
    <>
      <MDBProgress className="my-2" material value={progress} color="success" />
    </>
  );
}

export default ProgressBar;
