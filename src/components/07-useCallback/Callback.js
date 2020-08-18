import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBack = () => {
  const [counter, setCounter] = useState(10);
  // Esto hace que se cree una funcion en diferente espacios de memoria esto esta mal.
  // const increment = (n) => {
  //   setCounter((c) => c + n);
  // };

  // Esto hace que no se vuelva a llamar el componete.
  const increment = useCallback(
    (n) => {
      setCounter((c) => c + n); // Esto es necesario. ya que enviamos la fun y el estado.
    },
    [setCounter] // Aca como dependencias. De esta forma cuando cambien la func se enviara de nuevo.
  );

  return (
    <div>
      <h1>useCallback</h1>
      <p>Counter: {counter}</p>
      {/* //! Evitar que se vuelve a renderizar el btn. */}
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBack;
