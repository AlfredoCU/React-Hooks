import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas de useForm", () => {
  const initialForm = {
    name: "Alfredo",
    email: "",
  };

  test("Debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [form, input, reset] = result.current;
    // console.log(result.current);

    expect(form).toEqual(initialForm);
    expect(typeof input).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de cambiar el valor email del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, input] = result.current;

    act(() => {
      //! Simulamos un objeto del DOM.
      input({
        target: {
          name: "email",
          value: "alfred@gmail.com",
        },
      });
    });

    const [form] = result.current;
    // console.log(form);

    // expect(form).toEqual({
    //   name: "Alfredo",
    //   email: "alfred@gmail.com",
    // });

    expect(form).toEqual({
      ...initialForm,
      email: "alfred@gmail.com",
    });
  });

  test("Debe de re-establecer el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, input, reset] = result.current;

    act(() => {
      input({
        target: {
          name: "email",
          value: "alfred@gmail.com",
        },
      });
      reset();
    });

    const [form] = result.current;
    expect(form).toEqual(initialForm);
  });
});
