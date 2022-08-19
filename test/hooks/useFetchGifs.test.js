import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas del Custom Hook useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Bleach"));
    const { images, isLoading } = result.current;
    //console.log(images);
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Bleach"));
    await waitFor(
      // Espera a que se cumpla la promesa
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 5000,
      }
    );
    //console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
