import React from 'react';
import './Categories.scss';
import TitleBar from '../../../../components/TitleBar/TitleBar';
import BottomBar from '../../../../components/BottomBar/BottomBar';
import {ReactComponent as Meat} from '../../../../assets/Images/icons/FoodIcons/carnes.svg';
import {ReactComponent as Chicken} from '../../../../assets/Images/icons/FoodIcons/chicken.svg';
import {ReactComponent as China} from '../../../../assets/Images/icons/FoodIcons/china.svg';
import {ReactComponent as FastFood} from '../../../../assets/Images/icons/FoodIcons/comidaRapida.svg';
import {ReactComponent as Dessert} from '../../../../assets/Images/icons/FoodIcons/donut.svg';
import {ReactComponent as Hamburguer} from '../../../../assets/Images/icons/FoodIcons/hamburguesa.svg';
import {ReactComponent as Italian} from '../../../../assets/Images/icons/FoodIcons/italiana.svg';
import {ReactComponent as Japanese} from '../../../../assets/Images/icons/FoodIcons/japonesa.svg';
import {ReactComponent as SeaFood} from '../../../../assets/Images/icons/FoodIcons/mariscos.svg';
import {ReactComponent as Pizza} from '../../../../assets/Images/icons/FoodIcons/pizza.svg';
import {ReactComponent as Healthy} from '../../../../assets/Images/icons/FoodIcons/saludable.svg';
import {ReactComponent as Bread} from '../../../../assets/Images/icons/FoodIcons/pan.svg';
import CategoriesCards from './CategoriesCards/CategoriesCards';
import SalmonImg from '../../../../assets/Images/salmon.jpg';
import PancakeImg from '../../../../assets/Images/pancake.jpg';
import HamburguerImg from '../../../../assets/Images/hamburguer.jpg';
import PizzaImg from '../../../../assets/Images/pizza.jpg';
import CategoriesRecipe from './CategoriesRecipe/CategoriesRecipe';

const Categories = ()=>{
    const recipeCards = [
        {
        image:SalmonImg,
        name:'Salmón',
        type:'Mariscos'
        },
        {
        image:PancakeImg,
        name:'Pancake',
        type:'Panadería'
        },
        {
        image:HamburguerImg,
        name:'Hamburguer',
        type:'Fast food'
        },
        {
        image:PizzaImg,
        name:'Pizza',
        type:'Fast food'
        }
    ];
    const categories = [
        {   
            icon:<Meat/>,
            name:'Carnes'
        },
        {   
            icon:<Chicken/>,
            name:'Pollo'
        },
        {   
            icon:<China/>,
            name:'China'
        },
        {   
            icon:<FastFood/>,
            name:'Fast-Food'
        },
        {   
            icon:<Dessert/>,
            name:'Postres'
        },
        {   
            icon:<Hamburguer/>,
            name:'Burger'
        },
        {   
            icon:<Italian/>,
            name:'Italiana'
        },
        {   
            icon:<Japanese/>,
            name:'Japonesa'
        },
        {   
            icon:<SeaFood/>,
            name:'Mariscos'
        },
        {   
            icon:<Pizza/>,
            name:'Pizza'
        },
        {   
            icon:<Healthy/>,
            name:'Saludable'
        },
        {   
            icon:<Bread/>,
            name:'Pan'
        }
    ]
    return(
        <div className="Categories">
            <TitleBar
            title="Categorias"
            />
            <div className="Categories-wrapper">
                {
                    categories.map((catego)=>{
                        return(
                        <CategoriesCards
                            imgCatego={catego.icon}
                            nameCatego={catego.name}
                        />
                        )
                    })
                }
            </div>
            {
                recipeCards.map((card) =>{
                    return(
                        <CategoriesRecipe
                            recipes = {card}
                        />
                    )
                })
            }
            <BottomBar/>
        </div>
    )
};

export default Categories;