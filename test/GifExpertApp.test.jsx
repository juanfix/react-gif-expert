import { render, screen, fireEvent } from "@testing-library/react"
import {GifExpertApp} from "../src/GifExpertApp"

describe('Pruebas en el componente <GifExpertApp />', () => { 
    const category = "Framework"
    test('Se debe permitir agregar varias categorias y cargar su contenido', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category + " React" } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category+ " .NET" } });
        fireEvent.submit(form);
        //screen.debug();
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(3)
     })

     test('No se debe permitir el ingreso de una categoria con el mismo nombre', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        //screen.debug();
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBeLessThanOrEqualr(2)
     })
 })