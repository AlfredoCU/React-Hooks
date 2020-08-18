import React, { useEffect, useState } from "react";

const Message = () => {
  // //* Esto se recomienda para no consumir tanta memoria.
  // useEffect(() => {
  //   console.log("Se monto el componente"); //* Fase del efecto.
  //   return () => {
  //     console.log("Se desmonto el componente"); //* Fase de Limpieza.
  //   };
  // }, []); //* La dependencia que esta escuchando.

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
      console.log(":D");
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      Mensaje Enviado.
      <p>
        x: {x} - y: {y}
      </p>
    </div>
  );
};

export default Message;
