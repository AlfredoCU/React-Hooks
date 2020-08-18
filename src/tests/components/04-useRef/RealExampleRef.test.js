import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe("Pruebas en el componente RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("No muestra el componente Quotes", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Quotes").exists()).toBe(false);
  });

  test("Muestra el componente Quotes", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Quotes").exists()).toBe(true);
  });
});
