import React from 'react';
import './CategoriesRecipe.scss';

const CategoriesRecipe = ({recipes})=>{

    const style = {backgroundImage:`url(${recipes.image})`}

    return(
        <div className="CategoriesRecipe full-width" style={style}>
            <div className="CategoriesRecipe-overlay" />
            <p className="CategoriesRecipe-name">{recipes.name}</p>
            <p className="CategoriesRecipe-type">{recipes.type}</p>
        </div>
    )
};
export default CategoriesRecipe;