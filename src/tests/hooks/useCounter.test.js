import "@testing-library/jest-dom";
import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas de userCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter()); //! Si creo una variable con let para usarla varias partes no funciona.
    const { counter, increment, decrement, reset } = result.current;
    // console.log(current);

    expect(counter).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Ejecutar la función de incrementar en 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current; //! Manda error si hago la desestructuracion de counter aquí.

    act(() => {
      increment();
    });

    const { counter } = result.current; //! Esta raro pero es necesario hacerlo de esta forma.
    expect(counter).toBe(11);
  });

  test("Ejecutar la función de decrementar en 2", () => {
    const { result } = renderHook(() => useCounter(21));
    const { decrement } = result.current;

    act(() => {
      decrement(2);
    });

    const { counter } = result.current;
    expect(counter).toBe(19);
  });

  test("Ejecutar la función de reset en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment(10); //? Sólo puede ejecutarse una vez. prueba agregado otra vez la función.
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
