import React from 'react';
import './Button.scss';
import classNames from 'classnames';
import {ReactComponent as FacebookLogo} from '../../assets/Images/icons/facebook-icon.svg';
import {ReactComponent as GoogleLogo} from '../../assets/Images/icons/google-icon.svg';
const Button = ({className,main,danger,succes,simple,children,facebook,google,whiteButton, ...props})=>{

    const classes=classNames(
        'foodmkt-btn',
        simple?'simple':'',
        main?'main':'',
        danger?'danger':'',
        succes?'succes':'',
        facebook?'facebook':'',
        google?'google':'',
        whiteButton?'whiteButton':'',
        className
    )

    return(
        <button
        className={classes}
        >
            {facebook &&
                <FacebookLogo/>
            }
            {google &&
                <GoogleLogo/>
            } 
            {children}
        </button>
    )
};
export default Button;