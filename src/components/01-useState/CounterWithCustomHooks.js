import React from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterTwo = () => {
  const { counter, increment, reset, decrement } = useCounter(100);

  return (
    <div>
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement()}>
        -1
      </button>
    </div>
  );
};

export default CounterTwo;
