import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card4.module.scss';


const Card5 = () =>{

    let itemList = [{title : "Demographic Served", value : "Men & Women",special_text : ""},
    {title : "Men & Women", value : "Yes (3-14)"},
    {title : "Minimum Order Price", value : "$49.00"}];


    return(
        <CardTemplate title={"Store Demographics"}>
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
export default Card5;


