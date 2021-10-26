import { Button, Divider, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { myOrders } from '../../services/items';
import styles from '../../styles/components/Product-Details.module.scss'

const PaymentSummary = (props: any) =>{
 
        const [totalCost, setTotalCost] = useState(0);

        
      //   useEffect(() =>{
      //     // if(props.orderItemList)
      //     let orderItemList = props?.orderItemList;

      //     let totalPrice = 0;

      //     for(let i = 0 ; i < orderItemList.length ; i++){
      //       let qty = orderItemList[i].qty;
      //       let price = orderItemList[i].Service.price;
      //       totalPrice+=qty*price;
      //     }

      //     console.log("TotalPrice: ",totalPrice);
      //     setTotalCost(totalPrice);

      // },[]);
      

    const handleCheckoutNewOrder = () =>{

      let services = props?.orderItemList;
      console.log("Payment Summary: ",props?.orderItemList);
      if(services == undefined || services.length == 0 || services == null){
        message.error("Cart is empty");
      }else{
        let updatedServicesArray = services;
        let makeServiceArray = [];
        let totalPrice = 0;
        for (const key in services) {
          if(services[key].qty > 1){
            for(let i = 0 ; i < services[key].qty ; i++){
              let cartId = updatedServicesArray[key].id;
              let serviceId = updatedServicesArray[key].serviceId;
              let price = (updatedServicesArray[key].Service.price);
              let storeId = updatedServicesArray[key].Service.storeId;
              totalPrice+=parseInt(price);
              makeServiceArray.push({
                cartId: cartId,
                serviceId: serviceId,
                price: parseInt(price)
              })
            }
          }
        }



        console.log("UpdatedDServicesArray: ",makeServiceArray);
        console.log("Total price: ",totalPrice);
      
        try{
          myOrders({
            services: makeServiceArray,
            price: totalPrice
          }).then(res =>{
            console.log(res);
          })
        }catch(error: any){
          message.error(error);
        }

      }


    }


    return(
        <div className="card card2 pt-20 pl-15 pr-15">
            {/* <h5>Payment Summary</h5>
            
            
            {props?.orderItemList.map((obj: any) =>{
              
              return(
                <div key={`${obj}`}>
                  <div className={styles['t1-container']}>
                      <h6>{`${obj.Service.primaryServiceName}`}</h6>
                      <h6>${`${obj.Service.price}`}</h6>
                  </div>
                  <h6 className="txt weight400">Qty: {`${obj.qty}`}</h6>
                </div>
                
              )
            })}
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
                <h5>${props?.newPrice}</h5>
            </div>


            <Divider className="mt-18 mb-15"></Divider>

            <span>Have a Gift Card Number?</span>
            <div className={styles['t1-container']} style={{marginBlockStart : "5px !important"}}>
                <Input></Input>
                <Button className="primary" >Apply</Button>
            </div> */}

            <Divider className="mt-19 mb-25"></Divider>
            <Button className="primary full-width" style={{borderRadius : "8px"}} onClick={() => handleCheckoutNewOrder}>Checkout</Button>
        </div>
    )
}

export default PaymentSummary;