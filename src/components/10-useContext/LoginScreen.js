import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleUser = () => {
    setUser({ ...user, id: 7557, name: "Alfredo", email: "alfred@gmail.com" });
  };
  return (
    <div>
      <h1>LoginScreen</h1>
      <button onClick={handleUser} className="btn btn-success">
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginScreen;
