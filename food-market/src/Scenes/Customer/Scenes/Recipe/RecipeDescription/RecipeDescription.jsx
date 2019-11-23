import React from 'react';
import './RecipeDescription.scss';
import className from 'classnames';
import Button from '../../../../../components/Button/Button';
import {Link} from 'react-router-dom';

const RecipeDescription = ({info,open})=>{
     
    return(
        <div className={className("RecipeDescription",open?"open":"")}>
            <div className="RecipeDescription-titleWrapper">
                <p className="RecipeDescription-title">{info.title}</p>
                <p className="RecipeDescription-tag">{info.tag}</p>
            </div>
            <div className="RecipeDescription-ingredients">
                <ul className="RecipeDescription-ingredients-list">
                {
                    info.ingredients.map((ingredientes,i)=>{
                        return(
                        <li className="RecipeDescription-ingredients-list-item">
                            {ingredientes.ingredient}
                        </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="RecipeDescription-instructions">
                {
                    info.instructions.map((instructions,i)=>{
                        return(
                        <p className="RecipeDescription-instructions-text">{instructions.instruction}</p>
                        )
                    })
                }
            </div>
            <Link to={'/u/buyit'}>
                <Button
                className="full-width"
                    main
                >Comprar</Button>
            </Link>
        </div>
    );
};
export default RecipeDescription;