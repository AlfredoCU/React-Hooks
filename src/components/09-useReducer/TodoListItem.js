import React, { memo } from "react";
import PropTypes from "prop-types";

const TodoListItem = memo(({ todo, index, handleDelete, handleToggle }) => {
  console.log("Mundo");
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-1">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => handleToggle(todo.id)}
      />
      <span>
        {index + 1}. {todo.desc}
      </span>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Eliminar
      </button>
    </li>
  );
});

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoListItem;
