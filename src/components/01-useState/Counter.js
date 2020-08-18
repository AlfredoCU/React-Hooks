import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 100,
    counter4: 1000,
  });

  const handleCounter = () => {
    //* El spread operator debe de ir antes de todo, para mantener el state anterior.
    setState({ ...state, counter1: counter1 + 1, counter2: counter2 + 1 });
  };

  const { counter1, counter2 } = state;

  return (
    <div>
      <h2>useState</h2>
      <p>{counter1}</p>
      <p>{counter2}</p>
      <button onClick={handleCounter}>+1</button>
    </div>
  );
};

export default Counter;
