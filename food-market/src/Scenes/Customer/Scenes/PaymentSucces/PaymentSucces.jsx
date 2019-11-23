import React from 'react';
import './PaymentSucces.scss';
import Succes from '../../../../assets/Images/checkSucces.png';
import BottomBar from '../../../../components/BottomBar/BottomBar';

const PaymentSucces = ()=>{
    return(
        <div className="PaymentSucces">
            <div className="PaymentSucces-succes">
                <div className="PaymentSucces-title">
                    <p>Compra Exitosa</p>
                </div>
                    <img src={Succes}></img>
            </div>
            <BottomBar/>
        </div>
    )
};
export default PaymentSucces;