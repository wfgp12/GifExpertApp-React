import { useFetchGifs } from "../hooks";
import { GifCard } from "./GifCard";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {isLoading &&<h2>Cargando ...</h2>}
            <div className="card-grid">
                {gifs.map((image) =>
                    <GifCard
                        key={image.id}
                        {...image}
                    />
                )}
            </div>
        </>
    )
}
