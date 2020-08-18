import React, { useState } from "react";
import Quotes from "../03-examples/Quotes";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h4>REAL EXAMPLE USEREF</h4>
      {show && <Quotes />}
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Mostrar/Desmontar
      </button>
    </div>
  );
};

export default RealExampleRef;
