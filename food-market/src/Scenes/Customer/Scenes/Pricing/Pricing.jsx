import React from 'react';
import './Pricing.scss';
import TitleBar from '../../../../components/TitleBar/TitleBar'
import BottomBar from '../../../../components/BottomBar/BottomBar';
import PricingCard from './PricingCard/PricingCard';

const Pricing = ()=>{
    return(
        <div className="Pricing">
            <TitleBar
                title="Planes"
            />
               <PricingCard
                    title="Ilimitado"
                    price="5.99"
                    main
                />
                <PricingCard
                    title="Básico"
                    price="2.99"
                    muted
                />
            <BottomBar/>
        </div>
    )
};
export default Pricing;