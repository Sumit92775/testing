import { Button, Divider, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { myOrders } from '../../services/items';
import styles from '../../styles/components/Product-Details.module.scss'
import { useRouter } from 'next/router';

const PaymentSummary = ({orderItemList, newPrice}) =>{

        const router = useRouter();
        const [totalCost, setTotalCost] = useState(0);
        const [orderItemList1, setOrderItemlist1] = useState([]);
        // const [totalPrice, setTotalPrice] = useState(0);
        useEffect(() =>{
          // if(props.orderItemList)
          // let orderItemList = orderItemList;

          setOrderItemlist1(orderItemList);
          setTotalCost(newPrice);

          let totalPrice = 0;

          // for(let i = 0 ; i < orderItemList1.length ; i++){
          //   let qty = orderItemList1[i].qty;
          //   let price = orderItemList1[i].Service.price;
          //   totalPrice+=qty*price;
          // }

          console.log("TotalPrice: ",totalPrice);
          // setTotalCost(totalPrice);

      },[orderItemList, newPrice]);
      

    const handleCheckoutNewOrder = () =>{

      let services = orderItemList1;
      // console.log("Payment Summary: ",props?.orderItemList);
      console.log("Payment Summary: ",orderItemList1);
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
          }else{
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



        console.log("UpdatedDServicesArray: ",makeServiceArray);
        console.log("Total price: ",totalPrice);
      
        try{
          myOrders({
            services: makeServiceArray,
            price: totalPrice
          }).then(res =>{
            console.log("Bookings: ",res);
            router.push(`${ process.env.base_url }bookings`);
          })
        }catch(error){
          message.error(error);
        }
      }


    }


    return(
        <div className="card card2 pt-20 pl-15 pr-15">
            <h5>Payment Summary</h5>
            
            {orderItemList1.length > 0 ? 
            <div>
                {orderItemList1.map((obj) =>{
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
                    <h5>${totalCost}</h5>
                </div>


                <Divider className="mt-18 mb-15"></Divider>

                <span>Have a Gift Card Number?</span>
                <div className={styles['t1-container']} style={{marginBlockStart : "5px !important"}}>
                    <Input></Input>
                    <Button className="primary" >Apply</Button>
                </div>
                <Divider className="mt-19 mb-25"></Divider>
            </div>
            
            :
            <div className="text center mt-10 mb-10">
              <span>
                <strong>
                  Cart is Empty.
                </strong>
              </span>
            </div>
            }
            

            <Button disabled={orderItemList1.length > 0 ? false : true} className="primary full-width" style={{borderRadius : "8px"}} onClick={handleCheckoutNewOrder}>Checkout</Button>
        </div>
    )
}

export default PaymentSummary;