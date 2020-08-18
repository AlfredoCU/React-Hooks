import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoResucer";
import { useForm } from "../../hooks/useForm";

const TodoApp = () => {
  //* Función reducer, state inicial y función para inicializar el state.
  // const [state, dispatch] = useReducer(reducer, initialState, init);

  // const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React", // Descripción.
  //     done: false, // Status.
  //   },
  // ];

  // Si es falso entonces ejecuta la segunada parte ->  false || [].
  // Si JSON.parse() no recibe valores entonces retorna un null.
  // En este caso si es null entonce ejecuata la segunda parte -> null || [] adsd
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [inputs, handleInputChange, resetInput] = useForm({ description: "" }); // name: value
  const { description } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    // console.log("Nueva Tarea");

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const actionAdd = {
      type: "add",
      payload: newTodo,
    };

    dispatch(actionAdd);
    resetInput();
  };

  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };

    // console.log(id);
    dispatch(actionDelete);
  };

  const handleToggle = (id) => {
    const actionToggle = {
      type: "toggle",
      payload: id,
    };

    // console.log(id);
    dispatch(actionToggle);
  };

  return (
    <>
      <header className="header">
        <h2>useReducer</h2>
        <h5>Todos ({todos.length})</h5>
      </header>

      <main className="container row col-12">
        <section className="col-7">
          <ul className="list-group text-info">
            {todos &&
              todos.map((todo, key) => (
                <li
                  key={`${todo.id} - ${key}`}
                  className="list-group-item d-flex justify-content-between align-items-center mb-1"
                >
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleToggle(todo.id)}
                  />
                  {key + 1}. {todo.desc}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
          </ul>
        </section>

        <section className="col-5">
          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Agregar..."
              autoComplete="off"
              className="form-control"
              value={description}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary btn-block mt-1">
              Agregar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default TodoApp;
