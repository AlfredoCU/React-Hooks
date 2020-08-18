import React, { memo } from "react";

//* un estado que no esta cambiando. Memoriza las props.
export const Hijo = memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-success mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
