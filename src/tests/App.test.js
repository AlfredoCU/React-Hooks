import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import App from "../App";

describe("Pruebas al componente App", () => {
  test("Foto del componente", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
