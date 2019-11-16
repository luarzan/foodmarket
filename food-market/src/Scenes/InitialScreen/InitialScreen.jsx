import React,{useState} from 'react';
import './InitialScreen.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import Button from '../../components/Button/Button';
import {Link} from "react-router-dom";
import BtnFacebookLogin from './BtnFacebookLogin';
import BtnGoogleLogin from './BtnGoogleLogin';

const InitialScreen = ()=>{
const [toggleLogIn,setToggleLogIn] = useState('ingresa')
const changeToLogIn = ()=>{
    setToggleLogIn('ingresa')
}
const changeToRegister = ()=>{
    setToggleLogIn('registro')
}
    return(
        <div className="InitialScreen">
            <TitleBar
            logTitle = "FOOD"
            subTitle = "Junkie"
            />
            <div className="InitialScreen-log full-width">
                <div
                onClick={()=>{
                    changeToLogIn()
                }} >
                <Button 
                simple 
                className="InitialScreen-text">Ingresa</Button>
                </div>
                <div 
                  onClick={()=>{
                    changeToRegister()
                }} >
                <Button
                simple
                className="InitialScreen-text">Registrate</Button>
                </div>
            </div>
            <div className="InitialScreen-log-inputs-wrapper full-width">
                {toggleLogIn === 'registro'?
                <input placeholder="Nombre" className="inputs margin-inputs full-width" type="text"/>
                :''}
                <input placeholder="Correo" className="inputs margin-inputs full-width" type="text"/>
                <input placeholder="Contraseña" className="inputs full-width" type="text"/>
            </div>
            <div className="white-back-figure">
                {/* <Button
                className="full-width"
                whiteButton
                facebook
                >INGRESA CON FACEBOOK</Button> */}
                {/* <Button
                className="full-width"
                whiteButton
                google
                >INGRESA CON GOOGLE</Button> */}
                <BtnFacebookLogin></BtnFacebookLogin>
                <BtnGoogleLogin></BtnGoogleLogin>
                <Link to={'/u/recipe'}>
                    <Button
                    className="full-width"
                    main
                    >{toggleLogIn === 'ingresa'?'INGRESA':'COMIENZA'}</Button>
                </Link>
            </div>
        </div>
    )
};
export default InitialScreen;