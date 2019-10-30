import React from 'react';
import './Button.scss';
import classNames from 'classnames';
import {ReactComponent as FacebookLogo} from '../../assets/Images/icons/facebook-icon.svg';
const Button = ({className,main,danger,succes,bottomBtn,simple,children,facebook,google, ...props})=>{

    const classes=classNames(
        'foodmkt-btn',
        bottomBtn?'bottom-btn':'',
        simple?'simple':'',
        main?'main':'',
        danger?'danger':'',
        succes?'succes':'',
        facebook?'facebook':'',
        google?'google':'',
        className
    )

    return(
        <button
        className={classes}
        >
            {facebook &&
                <FacebookLogo/>
            }
            {children}
        </button>
    )
};
export default Button;