import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { testTodos } from "../../fixtures/testTodos";
import TodoListItem from "../../../components/09-useReducer/TodoListItem";

describe("pruebas al componente TodoListItem", () => {
  // Creamos funciones.
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={testTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Foto del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar a la función handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalled(); // Si se manda a llamar.
    expect(handleDelete).toHaveBeenCalledTimes(1); // Debe de ser llamado una vez.
    expect(handleDelete).toHaveBeenCalledWith(expect.any(Number)); // El argumento debe de ser un numero.
  });

  test("Debe de llamar a al función handleToggle", () => {
    const value = testTodos[0].id;
    wrapper.find("input").simulate("change", { target: { value } });
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(value); // También puede ser un testTodo[0].id
  });

  test("Debe de mostrar el texto correctamente", () => {
    const text = wrapper.find("span").text().trim();
    expect(text).toBe(`1. ${testTodos[0].desc}`);
  });
});

// hasClass -> evalua un class de css. true o false.
// prop -> evalua una propiedad.
// props -> evalua todas las propiedades.
