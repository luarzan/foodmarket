import React from 'react';
import './RecipeCard.scss';

const RecipeCard = ({recipe,cardType,children})=>{

    const style = {backgroundImage:`url(${recipe.image})`}

    switch(cardType){
        case 'recipeCard':
            cardType ='RecipeCard'
        break;
        case 'timeOfTheDayCard':
            cardType ='TimeOfTheDayCard'
        break;
    }
    
    return(
        <div className={cardType} style={style}>
            {cardType==='RecipeCard' &&
            <div className="RecipeCard-text full-width">
                <p className="RecipeCard-name">{recipe.name}</p>
                <p className="RecipeCard-type">{recipe.type}</p>
            </div>
            }
            {cardType==='TimeOfTheDayCard' &&
                <p className="TimeOfTheDayCard-text">{children}</p>
            }
        </div>
    )
};
export default RecipeCard;