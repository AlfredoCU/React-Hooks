import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import HomeScreen from "../../../components/10-useContext/HomeScreen";
import { UserContext } from "../../../components/10-useContext/UserContext";

describe("Pruebas en HomeScreen", () => {
  const user = {
    id: 7557,
    name: "Alfredo",
    email: "alfred@gmail.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("Foto del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
