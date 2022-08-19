import { render, screen, fireEvent } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "DBZ";

  test("Debe de mostrar el loading incialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByText("Cargando..."));
    expect(screen.getAllByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Naruto",
        url: "https://localhost/naruto.jpg",
      },
      {
        id: "123",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
