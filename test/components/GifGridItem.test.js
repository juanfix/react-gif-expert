import { render, screen, fireEvent } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Se realiza test a GifGridItem.jsx", () => {
  const props = {
    title: "Titulo x",
    url: "https://localhost/img.jpg",
  };

  test("Se realiza prueba de snapshot", () => {
    const { container } = render(<GifGridItem {...props} />);
    //console.log(container);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem {...props} />);
    //screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(props.url);
    expect(alt).toBe("Titulo x");
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifGridItem {...props} />);
    //screen.debug();
    expect(screen.getByText(props.title)).toBeTruthy();
  });
});
