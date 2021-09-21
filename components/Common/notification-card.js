import {Divider, Button} from 'antd';
import React from 'react';
import styles from './SettingCard.module.scss'
import EditIcon from '@material-ui/icons/Edit';

const NotificationCard = (props) =>{

    console.log(props.cardDetails.content);
    console.log(props.modal);

   const OpenModal = () =>{
        props.modal(props.modalName);
    }

    return(
        <div className="card card2 pl-32 pr-32" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <div className="flex" style={{justifyContent : "space-between"}}>
                    <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18 auto-width">{props.cardDetails.title}</h5>
                    <span className="txt pull-right dark2 flex center-content"><EditIcon/><u>Notification Preferences</u></span>
                </div>
                <Divider className="mt-5 mb-32"></Divider>
            </div>

            {props.cardDetails.content.map(( obj ) =>{
                return(
                    <div key={`${obj}`} className="card card2 mb-30">
                        {/* <div className=""> */}
                        <div className="mb-3">
                            <span className="full-width pl-4 pr-4 pt-4 pb-4 fz-11 txt white" style={{backgroundColor : obj.titleColor, borderRadius : "4px"}}>{obj.title}</span>
                        </div>
                                                
                        <div>
                            <span className="full-width">{obj.msg}</span>
                        </div>

                        <div>
                            <span className="full-width fz-11">{obj.date}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default NotificationCard;