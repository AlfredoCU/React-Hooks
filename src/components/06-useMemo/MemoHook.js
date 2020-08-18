import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import { process } from "../../helpers/process";

const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  const memoProcess = useMemo(() => process(counter), [counter]);

  //* Se le envia una función y una dependencia la cual escucha.
  //* useMemo(() => function, input)

  return (
    <div>
      <h1>useMemo</h1>
      <p>Counter: {counter}</p>
      <p>{memoProcess}</p>
      <button className="btn btn-danger mr-2" onClick={() => increment()}>
        Increment
      </button>

      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
