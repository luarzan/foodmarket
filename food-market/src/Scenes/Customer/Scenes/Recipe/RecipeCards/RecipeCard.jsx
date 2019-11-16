import React from 'react';
import './RecipeCard.scss';

const RecipeCard = ({recipe,cardType,recipePopularCard,timeOfTheDayCard,children})=>{
    
   
        const style = {backgroundImage:`url(${recipe?recipe.image:''})`}
    
    
    
    
    return(
        <div className={cardType} style={style}>
            {recipePopularCard &&
            <div className="RecipeCard-text full-width">
                <p className="RecipeCard-name">{recipe.name}</p>
                <p className="RecipeCard-type">{recipe.type}</p>
            </div>
            }
            {timeOfTheDayCard &&
                <p className="TimeOfTheDayCard-text">{children}</p>
            }
        </div>
    )
};
export default RecipeCard;