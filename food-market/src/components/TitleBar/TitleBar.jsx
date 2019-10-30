import React from 'react';
import './TitleBar.scss';

const TitleBar = ({title,subTitle})=>{



return(
    <div className="TitleBar">
        {title &&
        <div>
            <p className="title">{title}</p>
            <p className="subTitle">{subTitle}</p>
        </div>  
        }

    </div>
)
};
export default TitleBar;