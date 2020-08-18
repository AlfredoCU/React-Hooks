import React, { memo } from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = memo(({ todos, handleDelete, handleToggle }) => {
  console.log("TodoList");
  return (
    <section className="col-7">
      <ul className="list-group text-info">
        {todos &&
          todos.map((todo, key) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              index={key}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
      </ul>
    </section>
  );
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoList;
