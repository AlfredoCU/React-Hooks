import { useState } from "react";

export const useForm = (quantity = {}) => {
  const [inputs, setInputs] = useState(quantity);

  const reset = () => {
    setInputs(quantity);
  };

  const handleInputChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  return [inputs, handleInputChange, reset];
};

// console.log({
//! Mantiene el estado anterio, sino se agrega -> y escribes en name y despues en email, se pierde el estado anterio de name.
//   ...inputs,
//   [target.name]: target.value,
// });
