import React, { memo } from "react";
import PropTypes from "prop-types";

const TodoHeader = memo(({ count }) => {
  return (
    <header className="header">
      <h2>useReducer</h2>
      <h5>Todos ({count})</h5>
    </header>
  );
});

TodoHeader.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TodoHeader;
