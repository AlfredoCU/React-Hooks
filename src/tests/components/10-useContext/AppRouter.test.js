import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import AppRouter from "../../../components/10-useContext/AppRouter";
import { UserContext } from "../../../components/10-useContext/UserContext";

describe("Prueba en AppRouter", () => {
  const user = {
    id: 7557,
    name: "Alfredo",
    email: "alfred@gmail.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Foto del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
