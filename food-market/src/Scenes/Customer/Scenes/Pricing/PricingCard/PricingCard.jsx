import React from 'react';
import './PricingCard.scss';
import {ReactComponent as DollarIcon} from '../../../../../assets/Images/icons/dollarIcon.svg';
import classNames from 'classnames';

const PricingCard = ({title,price,muted,main})=>{
    return(
        <div className={classNames("PricingCard", muted?'muted':main?'main':'')}>
            <div className="PricingCard-plan">
                <p className="PricingCard-plan-title">{title}</p> 
                <div className="PricingCard-priceWrapper">
                    <DollarIcon/>
                    <p className="PricingCard-plan-price">{price}</p>
                </div> 
            </div>
        </div>
    )
};
export default PricingCard;