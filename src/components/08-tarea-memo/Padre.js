import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //* Una función que no esta cambiando. Memoriza la función.
  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );

  //   const increment = useMemo(() => incrementar(), [setValor]);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
