import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";
import { testTodos } from "../../fixtures/testTodos";
import TodoApp from "../../../components/09-useReducer/TodoApp";

describe("Prueba en el componente TodoApp", () => {
  Storage.prototype.setItem = jest.fn(() => {});

  test("Foto al componente", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });

  //! Para que pase esta prueba se debe de eliminar los memos.
  test("Debe de agregar un TODO", () => {
    // const wrapper = mount(<TodoApp />);
    // act(() => {
    //   wrapper.find("TodoAdd").prop("handleAdd")(testTodos[0]); // Aquí mismo se va a ejecutar.
    //   wrapper.find("TodoAdd").prop("handleAdd")(testTodos[1]); // Aquí mismo se va a ejecutar.
    // });
    //! IMPORTATEN -> punto 1: el h5 se encuentra en el componente TodoHeader.
    //! Con un shallow arrogaria un error de que el nodo no fue encontrado.
    //! Pero con ayuda mount podemos analizar sus componentes hijos.
    // expect(wrapper.find("h5").text().trim()).toBe("Todos (2)");
    // expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe de eliminar un TODO", () => {
    // const wrapper = mount(<TodoApp />);
    // act(() => {
    //   wrapper.find("TodoAdd").prop("handleAdd")(testTodos[0]);
    //   wrapper.find("TodoList").prop("handleDelete")(testTodos[0].id);
    // });
    // expect(wrapper.find("h5").text().trim()).toBe("Todos (0)");
  });
});

/* 1.- Con mount podemos analizar más profundo nuestro componente. 
    El shallow es más básico, su alcance es sólo el componente, 
    pero con Mount se obtiene más información como sus hijos, 
    el contexto en el cual está corriendo y muchas cosas más.

  2.- Como mount evalua un gran variedad de información es necesario
    que este dentro de un act.
    Las actualizaciones en la interfaz son envueltas en act() para manejar con mayor 
    control los estados de actualización.
    Esto hace que tus pruebas corran de una forma más parecida a como lo hace 
    React en el navegador.
*/
