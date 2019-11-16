import React from 'react';
import './CategoriesCards.scss';

const CategoriesCards = ({imgCatego,nameCatego})=>{
    return(
        <div className="CategoriesCards">
            <div className="CategoriesCards-img">
                {imgCatego}
            </div>
            <p className="CategoriesCards-name">{nameCatego}</p>
        </div>
    )
};

export default CategoriesCards;