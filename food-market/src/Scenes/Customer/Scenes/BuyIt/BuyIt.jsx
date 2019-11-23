import React, { useState, useCallback } from 'react';
import './BuyIt.scss';
import TitleBar from '../../../../components/TitleBar/TitleBar';
import BottomBar from '../../../../components/BottomBar/BottomBar';
import PancakeImg from '../../../../assets/Images/pancake.jpg';
import Button from '../../../../components/Button/Button';
import {Link} from 'react-router-dom';


const BuyIt =()=>{
    
    const style = {backgroundImage:`url(${PancakeImg})`};
    const [amount,setAmount] = useState(0); 

    const suma = useCallback(()=>{
        setAmount(amount + 1);
    },[amount]);
    const resta = useCallback(()=>{
        setAmount(amount - 1);
    },[amount]);
    return(
        <div className="BuyIt">
            <TitleBar
            title="Pagar"
            />
            <div className="BuyIt-proccess">
                <div className="BuyIt-payment">
                    <div className="BuyIt-titleWrapper">
                        <p className="BuyIt-title">PANCAKE</p>
                        <p className="BuyIt-subTitle">Desayuno</p>
                    </div>
                    <div className="BuyIt-img" style={style}>
                    </div>
                    <div className="BuyIt-amountWrapper">
                        <button onClick={suma} className="BuyIt-amountBtn"><p>+</p></button>
                            <p className="BuyIt-amount">{amount}</p>
                        <button onClick={resta} className="BuyIt-amountBtn"><p>-</p></button>
                    </div>
                </div>
                <Link to={"/u/succes"}>
                    <Button
                    className="full-width"
                        main
                    >Pagar</Button>
                </Link>
            </div>
            <BottomBar/>
        </div>
    )
};

export default BuyIt;