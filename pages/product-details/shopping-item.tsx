import React from 'react';
import { Avatar, Checkbox } from 'antd';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import styles from '../../styles/components/ShoppingCard.module.scss'


const ShoppingItem = (props : any) =>{

    return(
        <div className={styles['container']}>
            <div className={styles['left-container']}>
                <Checkbox className="mr-10"><Avatar className="ml-20" size={70}></Avatar></Checkbox>
            </div>
            <div className={styles['right-container']}>
                <div className={styles['sp_container']}>
                    <h6>Arabic Coffee</h6>
                    <h5 className="fz-23">$49</h5>
                </div>
                <span className={styles['align']}>by <strong>Halais</strong></span>
                <div className={styles['q-container']}>
                    <span>-</span>
                    <span className={styles['cb']}>Qty: 1</span>
                    <span>+</span>
                </div>
                <div className={styles['sss-container']}>
                    <span>Size: <strong>1 Plate</strong></span>
                    <span>Staff: <strong>Chris</strong></span>
                    <span>Service Type: <strong>Dine-In</strong></span>
                    <DeleteFilled style={{fontSize : "20px", color : "var(--red-1)"}} />
                </div>
                <span className="mt-3">Date &amp; Time: <strong>24/10/2020 09:00AM</strong></span>
                <span className="mt-3 mb-0" onClick={()=>props.modal("Edit Preferences")}><EditFilled></EditFilled>Edit  Preferences</span>
            </div>
        </div>
    )
}

export default ShoppingItem;