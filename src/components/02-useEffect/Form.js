import React, { useState, useEffect } from "react";
import Message from "./Message";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const { name, email } = form;

  //* No importa qué cambie, se vuélve a ejecutar.
  useEffect(() => {
    console.log("HEY");
  });

  //* Sólo se dispara una vez despues de renderizar el componente -> ComponentDidMount.
  useEffect(() => {
    console.log("YEAH");
  }, []);

  //* Si queremos que se dispare cada vez que se realiza un cambio en el form.
  useEffect(() => {
    console.log("FORM CAMBIO");
  }, [form]);

  //* Si queremos que se dispare cada vez que se realiza un cambio en el input 'email'
  useEffect(() => {
    console.log("INPUT EMAIL CAMBIO");
  }, [email]);

  // Desestructuramos event.target.
  const handleInputChange = ({ target }) => {
    // target.name es el nombre del input y el target.value es el valor que se ingresa en el input.
    setForm({ ...form, [target.name]: target.value }); // MATCH.
  };

  return (
    <div>
      <h2>useEffect</h2>
      <form className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Nombre completo..."
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="example@example.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </form>
      {name === "123" && <Message />}
    </div>
  );
};

export default Form;
