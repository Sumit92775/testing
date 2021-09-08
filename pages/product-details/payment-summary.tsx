import { Button, Divider, Input } from 'antd';
import React from 'react';
import styles from '../../styles/components/Product-Details.module.scss'

const PaymentSummary = () =>{
    return(
        <div className="card card2 pt-20 pl-15 pr-15">
            <h5>Payment Summary</h5>
            <div className={styles['t1-container']}>
                <h6>Arabic Coffee</h6>
                <h6>$49.00</h6>
            </div>
            <h6 className="txt weight400">Qty: 1</h6>
            
            <div className={styles['t1-container']}>
                <h6 className="txt weight400">Tax</h6>
                <h6>$10.00</h6>
            </div>
           
            <div className={styles['t1-container']}>
                <h6 className="txt weight400">Booking Fee</h6>
                <h6>$00.00</h6>
            </div>

            <Divider className="mt-18 mb-0"></Divider>
            
            <div className={styles['t1-container']} style={{marginBlockStart : "15px !important"}}>
                <h5>Sub Total</h5>
                <h5>$50.00</h5>
            </div>


            <Divider className="mt-18 mb-15"></Divider>

            <span>Have a Gift Card Number?</span>
            <div className={styles['t1-container']} style={{marginBlockStart : "5px !important"}}>
                <Input></Input>
                <Button className="primary" >Apply</Button>
            </div>

            <Divider className="mt-19 mb-25"></Divider>
            <Button className="primary full-width" style={{borderRadius : "8px"}}>Checkout</Button>
        </div>
    )
}

export default PaymentSummary;