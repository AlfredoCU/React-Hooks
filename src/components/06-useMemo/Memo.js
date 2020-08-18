import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Start from "./Start";

const Memo = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memo</h1>
      <Start value={counter} />
      <button className="btn btn-danger mr-2" onClick={() => increment()}>
        Increment
      </button>

      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memo;
