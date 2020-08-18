import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const FormWithCustomHooks = () => {
  const [inputs, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputs;

  useEffect(() => {
    console.log("Montar");
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
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
        className="form-control mb-2"
        placeholder="example@example.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        className="form-control mb-2"
        placeholder="contraseña..."
        value={password}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-info">
        Enviar
      </button>
    </form>
  );
};

export default FormWithCustomHooks;
