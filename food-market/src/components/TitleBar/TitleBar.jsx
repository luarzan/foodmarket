import React from 'react';
import './TitleBar.scss';
import {ReactComponent as ReturnBtn} from '../../assets/Images/icons/left-arrow.svg';

const TitleBar = ({logTitle,subTitle,title})=>{


return(
    <div className={logTitle?'TitleBar-log':'TitleBar'}>
        {logTitle &&
        <div>
            <p className="mainTitle">{logTitle}</p>
            <p className="subTitle">{subTitle}</p>
        </div>  
        }
        {title &&
            <div className="title-wrapper">
                <ReturnBtn className="returnBtn"/>
                <p className="title">{title}</p>
            </div> 
        }
    </div>
)
};
export default TitleBar;