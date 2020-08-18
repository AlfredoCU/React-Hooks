import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import LoginScreen from "../../../components/10-useContext/LoginScreen";
import { UserContext } from "../../../components/10-useContext/UserContext";
import { act } from "@testing-library/react";

describe("Prueba en LoginScreen", () => {
  const user = {
    id: 7557,
    name: "Alfredo",
    email: "alfred@gmail.com",
  };

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Foto del componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Simular un handleUser", () => {
    act(() => {
      wrapper.find("button").simulate("click");
    });

    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith(user);
    expect(setUser).toHaveBeenCalledWith(expect.any(Object));
  });
});
