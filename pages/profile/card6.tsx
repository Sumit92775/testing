import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card6.module.scss';

const Card6 = () =>{

    let itemList = [{title : "Official Name as per the Commercial Document", value : "Halais", special_text : ""},
    {title : "Commercial Registration Number (CRN)", value : "1234567890"},
    {title : "Expiry date", value : "21 Nov 2021"},
    {title : "Name of The owner as Per the Commercial Document", value : "Muhammed"},
    {title : "Mobile", value : "+966-505-5515-86"},
];


    return(
        <CardTemplate title={"Registration Details"}>
            <div className={styles['main-content-container']}>

            {itemList.map((obj) =>{
                return(
                    <div key={`${obj}`}>
                        <strong>{obj.title}</strong>
                        <span>{obj.value}<span className="primary txt fz-11"> {obj.special_text}</span></span>
                    </div>
                )
            })}    
        
        </div>    
        </CardTemplate>

    )

}
export default Card6;


