import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Evaluar useFetch", () => {
  test("Debe de retornar la informacion por defecto", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(1));
    const { data, loading } = result.current;

    //! Se supone que useRef evitaria agregar este método, pero arroja errores de desmotamiento del componente.
    await waitForNextUpdate();

    expect(data).toBe(null);
    expect(loading).toBe(true);
  });

  test("Debe de retornar informacion de la api", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(1));

    //* Actualiza la data.
    await waitForNextUpdate();

    //* La extraemos ya actualizada.
    const { data, loading } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
  });

  test("Debe de retornar un error", async () => {
    //! Se manda un argumento erroneo para que arroje un error.
    const { result, waitForNextUpdate } = renderHook(() => useFetch("a"));

    //* Actualizamos la data.
    await waitForNextUpdate();

    //* Extraemos la data.
    const { data, loading } = result.current;
    // console.log(data, loading); // Se puede comprobar que es lo que se recibe como error.

    expect(data).toEqual({
      code: "22P02",
      file: "numutils.c",
      length: 94,
      line: "62",
      name: "error",
      position: "39",
      routine: "pg_atoi",
      severity: "ERROR",
    });
    expect(loading).toBe(false);
  });
});
