import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card2.module.scss'

const Card2 = () =>{

    return(
        <CardTemplate title={"Store Media"}>
            <div>
                <p className="fz-16">Cover Images (Accepted Formats: JPEG, PNG, GIF (Minimum 1500*400))</p>
               
               <div className={styles['upload-image-container']}>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
               </div>

               <p className="mt-34 fz-16">Portfolio Images</p>

               <div className={styles['upload-image-container']}>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
                    <Avatar size={90} className="mr-26"></Avatar>
               </div>

            </div>


        </CardTemplate>
    )

}
export default Card2;


