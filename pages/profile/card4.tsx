import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card4.module.scss';

const Card4 = () =>{

    let itemList = [{title : "Categories", value : "Beauty Shop", special_text : "Main"},
    {title : "Sub Categories", value : "Beauty Salon"},
    {title : "Minimum Order Price", value : "$49.00"}];


    return(
        <CardTemplate title={"Categories"}>
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
export default Card4;


