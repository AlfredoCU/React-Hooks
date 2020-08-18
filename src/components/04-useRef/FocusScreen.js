import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef(); // Manipular el DOM.

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
    //document.querySelector("input").select();
  };

  return (
    <div>
      <h2>useRef</h2>
      <input
        ref={inputRef}
        className="form-control mb-2"
        placeholder="Nombre completo..."
      />
      <button onClick={handleClick} className="btn btn-primary">
        Enviar
      </button>
    </div>
  );
};

export default FocusScreen;
