import { useState } from "react";

export const useCounter = (count = 0) => {
  const [counter, setCounter] = useState(count);

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const reset = () => {
    setCounter(count);
  };

  const decrement = (factor = 1, limit = 1) => {
    if (counter > limit) {
      setCounter(counter - factor);
    }
  };

  //* Retornamos un obj, pero también puede ser un array, depende de las necesidades.
  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
