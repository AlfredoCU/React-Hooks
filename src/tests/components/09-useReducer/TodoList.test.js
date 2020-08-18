import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { testTodos } from "../../fixtures/testTodos";
import TodoList from "../../../components/09-useReducer/TodoList";

describe("Pruebas en el componente TodoList", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={testTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Foto del componente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //! Para que funcine se debe de quitar el memo del componente.
  test("Debe de tener dos <TodoListItem/>", () => {
    //! Para que funcione esto, no debe de estar el metodo memo englobando todo un componente.
    //! Ya que TodoListItem no existiria y en su lugar mostaria un memo().
    // expect(wrapper.find("TodoListItem").length).toBe(testTodos.length);
    // expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
    //   expect.any(Function)
    // );
    // console.log(wrapper.find("TodoListItem").length);
    // console.log(wrapper.find("TodoListItem").at(0).props());
  });
});
