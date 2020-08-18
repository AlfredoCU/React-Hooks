import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import TodoAdd from "../../../components/09-useReducer/TodoAdd";

describe("Prueba al componente TodoAdd", () => {
  const handleAdd = jest.fn();
  const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  test("Foto del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handleAdd", () => {
    //! Simulamos el evento change, con un argumento simulado el dom.
    const value = "";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    //! Ejecutamos un submit.
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    //! No se llama la función ya que la longitud de value <= 1
    expect(handleAdd).toHaveBeenCalledTimes(0);
  });

  //! Para que funcine se debe de quitar el memo del componente.
  test("Debe de llamar la función handleAdd", () => {
    //! Simulamos el evento change, con un argumento simulado el dom.
    // const value = "Aprender React";
    // wrapper.find("input").simulate("change", {
    //   target: {
    //     value,
    //     name: "description",
    //   },
    // });
    //! Ejecutamos un submit.
    // const formSubmit = wrapper.find("form").prop("onSubmit");
    // formSubmit({ preventDefault() {} });
    //! Se llama la función handleAdd.
    // expect(handleAdd).toHaveBeenCalled(); // Se debe de llamar.
    // expect(handleAdd).toHaveBeenCalledTimes(1); // Se llama una vez.
    // expect(handleAdd).toHaveBeenCalledWith(expect.any(Object)); // Se le envia como argumento un objeto.
    // expect(handleAdd).toHaveBeenCalledWith({
    //   id: expect.any(Number),
    //   desc: value,
    //   done: false,
    // }); // Evaluamos que si sea el objeto esperado.
    //! Reset.
    // expect(wrapper.find("input").prop("value")).toBe(""); // se ejecuta la funcion reset y debe de dejar el valor en un string vacio.
  });
});
