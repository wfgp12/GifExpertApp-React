import { useEffect, useState } from "react"
import { getGifs } from "../helpers";

export const useFetchGifs = (category) => {
    useEffect(() => {
        getGifs(category)
            .then(resp => {
                setGifs(resp);
                setIsLoading(false);
            })
            .catch(err => console.error(err))
            // .finally(setIsLoading(false))
        return () => {
            setGifs([])
            setIsLoading(true)
        }
    }, [category]);

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return {
        gifs,
        isLoading
    }
}
