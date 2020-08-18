import React, { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a llamar...");
  return (
    <button className="btn btn-danger mr-2" onClick={() => increment(2)}>
      Increment
    </button>
  );
});

export default ShowIncrement;
