import "@testing-library/jest-dom";
import {
  testTodos,
  actionAdd,
  actionDelete,
  actionToggle,
} from "../../fixtures/testTodos";
import { todoReducer } from "../../../components/09-useReducer/todoReducer";

describe("Pruebas a todoReducer", () => {
  test("Retorna el estado por defecto", () => {
    const state = todoReducer(testTodos, {});
    expect(state).toEqual(testTodos);
  });

  test("Agregar un TODO", () => {
    const state = todoReducer(testTodos, actionAdd);
    expect(state.length).toBe(3);
    expect(state).toEqual([...testTodos, actionAdd.payload]);
  });

  test("Eliminar un TODO", () => {
    const state = todoReducer([...testTodos, actionAdd.payload], actionDelete);
    expect(state.length).toBe(2);
    expect(state).toEqual(testTodos);
  });

  test("Modificar la propiedad done de un TODO", () => {
    const state = todoReducer(testTodos, actionToggle);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(testTodos[1]);
  });
});

// test("Eliminar la primera TODO", () => {
//   const actionD = {
//     type: "delete",
//     payload: 1,
//   };
//   const state = todoReducer(testTodos, actionD); // Eliminados el TODO con el id 1.
//   expect(state.length).toBe(1); // Longitud de 1 ya que eliminamos 1 de los 2 TODOS.
//   expect(state).toEqual([testTodos[1]]); // El state debe de ser igual al testTodo[1] ya que es el elemento que se matuvo.
// });
