/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks";

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas realizadas al componente <GifGrid />', () => {
    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })
        render(<GifGrid {...{ category }} />);
        
        expect(screen.getByText(category));
    });
    
    test('debe de mostrar items cuando se cargan las imagenes useFEtchGifs', () => {
        const gifs =[
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id:'',
                title:'goku',
                url:'https://localhost/goku.jpg'
            },
        ];
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        })
        
        render(<GifGrid {...{ category }} />);
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})