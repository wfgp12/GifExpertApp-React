import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

/* eslint-disable no-undef */
describe('Pruebas en el componente <AddCategory /> ', () => {
    const inputValue = 'Saitama';
    const onSubmit = jest.fn()

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onSubmit={() => { }} />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
    });
    
    test('debe de llamar el onSubmit si el input tiene algún valor', () => {
        render(<AddCategory onSubmit={onSubmit} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        
        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(inputValue);
    })
    
    test('No debe de llamar el onSubmit si el input esta vacio', () => {        
        render(<AddCategory onSubmit={onSubmit} />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onSubmit).toHaveBeenCalledTimes(1);
    })
})