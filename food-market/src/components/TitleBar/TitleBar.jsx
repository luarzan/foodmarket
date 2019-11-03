import React from 'react';
import './TitleBar.scss';
import className from 'classnames';

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
            <div>
                <p className="title">{title}</p>
            </div> 
        }
    </div>
)
};
export default TitleBar;