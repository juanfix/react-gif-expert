import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        //setCategories(cat => [...cat, 'RO']);
        setCategories([newCategory, ...categories]);
    }
    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            onNewCategory = { event => onAddCategory(event) }
        />
        {/* Lista de GIF */}
        { 
            categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>
            ))
        }
        {/* GIF item */}
    </>
  )
}
