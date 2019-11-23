import React, { useCallback, useState } from 'react';
import './Recipe.scss';
import '../../../../components/BottomBar/BottomBar';
import '../../../../components/TitleBar/TitleBar';
import TitleBar from '../../../../components/TitleBar/TitleBar';
import BottomBar from '../../../../components/BottomBar/BottomBar';
import RecipeCard from './RecipeCards/RecipeCard';
import SalmonImg from '../../../../assets/Images/salmon.jpg';
import PancakeImg from '../../../../assets/Images/pancake.jpg';
import HamburguerImg from '../../../../assets/Images/hamburguer.jpg';
import PizzaImg from '../../../../assets/Images/pizza.jpg';
import Data from '../../../data.json';
import RecipeDescription from './RecipeDescription/RecipeDescription';

const Recipe = ()=>{
    // const recipeCards = [
    //     {
    //     image:SalmonImg,
    //     name:'Salmón',
    //     type:'Mariscos'
    //     },
    //     {
    //     image:PancakeImg,
    //     name:'Pancake',
    //     type:'Panadería'
    //     },
    //     {
    //     image:HamburguerImg,
    //     name:'Hamburguer',
    //     type:'Fast food'
    //     },
    //     {
    //     image:PizzaImg,
    //     name:'Pizza',
    //     type:'Fast food'
    //     }
    // ];
    const recipeCards = Data;
    const timeOfTheDay = ['Desayuno','Comida','Cena'];
    const [filterActive,setFilterActive] = useState("");
    const [filterType, setFilterType] = useState([]);
    const [recipeOpen,isRecipeOpen] = useState(false);
    const [recipeInfo,setRecipeInfo] = useState({});
    const filterByDay = ((time)=>{
            const filterTypeCards = recipeCards.filter((recipe)=>{
                 return time === recipe.type
            });
            setFilterActive(time);
            setFilterType(filterTypeCards);
    });
    const enterRecipe = ((info)=>{
         setRecipeInfo({
            ...recipeCards[info]
         })
        isRecipeOpen(true);
    });
     return(
         <div className="Recipe">
             <TitleBar
             title="Recetas"
             />
             <div className="Recipe-wrapper">
                <div className="Recipe-morePopular">
                    <p className="Recipe-morePopular-text">Más populares</p>
                </div>
                <div className="Recipe-cardsWrapper">
                {filterActive?
                    filterType.map((card)=>{
                        return(
                            <RecipeCard
                            cardType="RecipeCard"
                            recipePopularCard
                            recipe={{image:card.cover,name:card.title,type:card.type}}
                            />
                        )
                    })
                :
                recipeCards.map((card,i)=>{
                    return(
                        <RecipeCard
                        key={card[i]}
                        clickFood={()=>enterRecipe(i)}
                        cardType="RecipeCard"
                        recipePopularCard
                        recipe={{image:card.cover,name:card.title,type:card.type}}
                        />
                    )
                })
                }
                </div>
             </div>
             <div className="Recipe-timeOfTheDay">
                 {
                     timeOfTheDay.map((timeOfTheDay)=>{
                         return(
                             <RecipeCard
                             click={()=>{filterByDay(timeOfTheDay)}}
                             cardType="TimeOfTheDayCard"
                             timeOfTheDayCard
                             >{timeOfTheDay}</RecipeCard>
                         )
                     })
                 }
             </div>
             {recipeOpen &&
                <RecipeDescription
                    info={recipeInfo}
                    open={recipeOpen}
                />
            }
             <BottomBar/>
         </div>
     )
};
export default Recipe;