import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const handleAddCategory = (newCat) => {
        if (categories.find(cat => cat.toLowerCase() === newCat.toLowerCase())) {
            const filterCat = categories.filter(cat => cat.toLowerCase() !== newCat.toLowerCase());
            setCategories([newCat, ...filterCat]);
        } else {
            setCategories(cat => [newCat, ...cat]);
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onSubmit={handleAddCategory} />

            {categories.map((category, index) => 
                <GifGrid 
                    key={index} 
                    category={category} 
                />
            )}

        </>
    )
}
