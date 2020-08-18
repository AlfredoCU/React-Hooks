import React, { useReducer, useEffect, useCallback } from "react";
import { todoReducer } from "./todoReducer";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = useCallback(
    (newTodo) => {
      const actionAdd = {
        type: "add",
        payload: newTodo,
      };
      dispatch(actionAdd);
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      const actionDelete = {
        type: "delete",
        payload: id,
      };
      dispatch(actionDelete);
    },
    [dispatch]
  );

  const handleToggle = useCallback(
    (id) => {
      const actionToggle = {
        type: "toggle",
        payload: id,
      };
      dispatch(actionToggle);
    },
    [dispatch]
  );

  return (
    <>
      <TodoHeader count={todos.length} />
      <main className="container row col-12">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <TodoAdd handleAdd={handleAdd} />
      </main>
    </>
  );
};

export default TodoApp;

//* Si se envia unicamente la descripcion como argumento.
// const handleAdd = useCallback(
//   (description) => {
//     const newTodo = {
//       id: new Date().getTime(),
//       desc: description,
//       done: false,
//     };
//     const actionAdd = {
//       type: "add",
//       payload: newTodo,
//     };

//     dispatch(actionAdd);
//   },
//   [dispatch]
// );
