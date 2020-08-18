import React, { memo } from "react";
import Proptypes from "prop-types";

//* Memo nos ayuda a indicar que se debe de renderizar.
const Start = memo(({ value }) => (
  <div>
    {console.log("Hola")}
    <h4>{value}</h4>
  </div>
));

Start.propTypes = {
  value: Proptypes.number.isRequired,
};

export default Start;

// El memo, sirve para memorizar algo y si sólo sus props cambian entonces va a volverse renderizar el componente.
// Caso contrario, va a usar la versión memorizada cuando tenga que redibujar.

// Así cuando el estado de counter cambie, este debe de renderizar el componente ya que recibe en sus props el valor del counter.
// Y cuando el estado show cambie, no debe de renderizar nada, ya que este no se le envía en las props.
// En este caso debe de recordar o memorizar la versión anterior y redibujar.
