import React,{useState} from 'react';
import './InitialScreen.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import Button from '../../components/Button/Button';

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
            title = "FOOD"
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
                <input placeholder="Nombre" className="inputs full-width" type="text"/>
                :''}
                <input placeholder="Correo" className="inputs full-width" type="text"/>
                <input placeholder="Contraseña" className="inputs full-width" type="text"/>
            </div>
            <Button
            facebook
            >INGRESA CON FACEBOOK</Button>
            <div className="white-back-figure">
            <Button
            className="half-width"
            main
            bottomBtn
            >{toggleLogIn === 'ingresa'?'INGRESAR':'COMIENZA'}</Button>
            </div>
        </div>
    )
};
export default InitialScreen;