import React, { memo } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";

const TodoAdd = memo(({ handleAdd }) => {
  const [inputs, handleInputChange, resetInput] = useForm({ description: "" });
  const { description } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    resetInput();
  };

  return (
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
  );
});

TodoAdd.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default TodoAdd;
