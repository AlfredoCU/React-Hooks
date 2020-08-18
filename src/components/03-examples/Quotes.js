import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

const Quotes = () => {
  const { counter, increment, reset, decrement } = useCounter(1);
  const { data, loading } = useFetch(counter);
  // data: [...] -> Estrictamente debe de ser un true para que pase a la segunda parete.
  const { author, quote } = !!data && data[0]; // data: null -> no entra a la segunda parte. ya que seria forzozamente false.

  return (
    <div>
      <h4>API BREAKING BAD</h4>
      {loading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <div>
          <p>{counter}</p>
          <p className="blockquote">{quote}</p>
          <em className="blockquote-footer mb-2">{author}</em>
          <div className="mb-2">
            {/* Es necesario esta sintaxis para no obtener como argumento el evento Dom. */}
            <button
              className="btn btn-primary mr-2"
              onClick={() => decrement()}
            >
              Atras
            </button>
            {/* No es necesario ya que no recibe ningun argumeto. */}
            <button className="btn btn-primary mr-2" onClick={reset}>
              Reset
            </button>
            {/* Podemos enviar un argumento de incremento y uno de limite, tambien en decremente. */}
            <button
              className="btn btn-primary mr-2"
              onClick={() => increment(1)}
            >
              Adelante
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;

// {
//   data &&
//     data.map((item, key) => (
//       <li key={`${item.quote_id} - quote - ${key}`}>
//         {item.quote} - {item.author} - {item.series}
//       </li>
//     ));
// }
