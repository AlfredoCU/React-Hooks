import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <p>HomeScreen</p>
      <p>{JSON.stringify(user, null, 3)}</p>
    </div>
  );
};

export default HomeScreen;
