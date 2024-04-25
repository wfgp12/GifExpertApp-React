import { render, screen } from "@testing-library/react"
import { GifCard } from '../../src/components/'

/* eslint-disable no-undef */
describe('Pruebas realizadas al componente <GifCard />', () => {
    const title = 'League of Legends';
    const url = 'https://media3.giphy.com/media/h5C2kiESzaypGjXtTY/giphy-downsized-medium.gif?cid=30e1a8980bwmomcq8f4b3s8ykghycqqpca6srj9wp753clme&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g';
    test('debe hace match con el snapshot', () => {
        const { container } = render(
            <GifCard 
                {...{
                    title,
                    url
                }}
            />
        );

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URl y ALT indicado', () => { 
        render(<GifCard {...{title, url}}/>);

        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
     })
})