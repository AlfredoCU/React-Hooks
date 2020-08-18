import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
import Quotes from "../../../components/03-examples/Quotes";

//! Fingir la data.
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Prueba del componente Quotes", () => {
  //! También se puede mandar a llamar otros hooks con data falsa.
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
    reset: () => {},
    decrement: () => {},
  });

  test("Foto del componente Cargado...", () => {
    useFetch.mockReturnValue({ data: null, loading: true }); //! Data inicial.
    const wrapper = shallow(<Quotes />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert").exists()).toBe(true);
  });

  test("Foto del componente con data", () => {
    const info = {
      author: "Alfredo",
      quote: "Hello World!",
    };

    useFetch.mockReturnValue({ data: [info], loading: false }); //! Data falsa.
    const wrapper = shallow(<Quotes />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find("em").text().trim()).toBe("Alfredo");
    expect(wrapper.find("button").exists()).toBe(true);
  });
});

/*
  Cuando tengas que evaluar las funciones de un componente, con la biblioteca jest es suficiente
  utilizando simulate().
  Cuando tengas que evaluar las funciones de un custom hook, con la biblioteca render-hooks
  utiliza act(). 
*/
