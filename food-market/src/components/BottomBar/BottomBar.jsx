import React from 'react';
import './BottomBar.scss';
import {ReactComponent as UserIcon} from '../../assets/Images/icons/user-icon.svg';
import {ReactComponent as HeartIcon} from '../../assets/Images/icons/heart-icon.svg';
import {ReactComponent as ShoppingCarIcon} from '../../assets/Images/icons/shoppingCar-icon.svg';
import {ReactComponent as CategoriesIcon} from '../../assets/Images/icons/categories-icon.svg';
import {ReactComponent as Logo} from '../../assets/Images/logo.svg';
import {Link} from 'react-router-dom';

const BottomBar = ()=>{
    return(
        <div className='BottomBar'>
            <div className="BottomBar-item">
                <UserIcon/>
            </div>
            
            <div className="BottomBar-item">
                <Link to={'/u/categories'}>
                    <CategoriesIcon/>
                </Link>
            </div>
            <div className="BottomBar-item-logo BottomBar-item">
                <Link to ={'/u/recipe'}>
                    <Logo/>
                </Link>
            </div>
            <div className="BottomBar-item">
                <HeartIcon/>
            </div>
            <div className="BottomBar-item">
                <Link to={'/u/shopping'}>
                     <ShoppingCarIcon/>
                </Link>
            </div>
        </div>
    )
};
export default BottomBar;