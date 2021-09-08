import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card3.module.scss'
import { Divider } from 'antd';

const Card3 = () =>{

    let itemList = [{title : "Building Number", value : "8228"},
    {title : "Unit Number", value : "@King abdul aziz south road"},
    {title : "Street", value : "2145"},
    {title : "District/Square", value : "Riyadh"},
    {title : "District/Square", value : "Yemeni"},
    {title : "Postal/Zip Code", value : "2121"},
    {title : "Additional Number", value : "2132"},
    {title : "State/Region", value : "Riyadh"},
    {title : "Country", value : "Saudi Arabia"},];


    return(
        <CardTemplate title={"General Details"}>
            <div className={styles['main-content-container']}>

                {itemList.map((obj) =>{
                    return(
                        <div>
                            <strong>{obj.title}</strong>
                            <span>{obj.value}</span>
                        </div>
                    )
                })}    
            
            </div>
        
        </CardTemplate>
   
   )

}
export default Card3;


