import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <p>AboutScreen</p>
      <p>{JSON.stringify(user, null, 3)}</p>
      <button onClick={handleLogout} className="btn btn-warning">
        Cerrar sesión
      </button>
    </div>
  );
};
export default AboutScreen;
