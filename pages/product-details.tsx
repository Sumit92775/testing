import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Product-Details.module.scss'
import CustomerLayout from '../components/User/Customer-Layout';
import ShoppingCard from './product-details/shopping-card';
import OrderFrom from './product-details/order-from';
import PaymentSummary from './product-details/payment-summary';
import DefaultAddress from './product-details/address-card';
import PaymentMethod from './product-details/payment-method';
// import BookingAndPaymentsModal from './Booking-Payments-Modal';
import { Button, Modal } from 'antd';
import EditPreferences from './product-details/edit-preferences-modal';
import cx from 'classnames';
import { getItemInCart } from '../services/items';

const ProductDetails = () =>{
   
const [selectedModalName, setSelectedModalName] = useState("");
const [selectedModal, setSelectedModal] = useState(false);
const [subscriptionTiers, setSubscriptionTiers] = useState(false);

const [cartItemList, setCartItemList] = useState([]);


// Manish
// Manish@123

//----------------------------------------------------------------------------------

const [orderItemList, setOrderItemList] = useState([] as any);
const [total, setTotal] = useState([]);
const [totalCost , setTotalCost] = useState(0);

useEffect(() =>{
    try{
        getItemInCart().then(res =>{
            if(res.status){
                if(res.data){
                    setCartItemList(res.data);
                    console.log("Cart List UseEfect: ",res.data);
                    setOrderItemList(res.data);
                    setTotal(res.data);

                    let totalPrice = 0;
                    for(let i = 0 ; i < res.data.length ; i++){
                        let qty = res.data[i].qty;
                        let price = res.data[i].Service.price;
                        totalPrice+=qty*price;
                      }
            
                      console.log("TotalPrice: ",totalPrice);
                      setTotalCost(totalPrice);
                }

            }else{
                console.log(res.status);
            }
        })


    }catch(error: any){
        console.log(error);
    }
    
},[])

const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
    setSubscriptionTiers(false);
};

const openModal = (type : any) => {

    console.log(type);
    setSelectedModal(!selectedModal);

    switch(type){
        case "Edit Preferences" : setSelectedModalName("Edit Preferences");
        break;
    }
};

const setFinalList = (itemId: any, qty: any) =>{
    let totalCartItem:any[] = orderItemList;
    for(let i = 0 ; i < totalCartItem.length ; i++){
        if(totalCartItem[i].id === itemId){
            totalCartItem[i].qty = qty;
        }
    }

    console.log("totalCartItem: ", totalCartItem);
    setOrderItemList(totalCartItem);
    
}

const resetUI = () =>{
    try{
        getItemInCart().then(res =>{
            if(res.status){
                if(res.data){
                    setCartItemList(res.data);
                    console.log("Cart List: ",res.data);
                    setTotal(res.data);

                    let totalPrice = 0;

                    for(let i = 0 ; i < res.data.length ; i++){
                        let qty = res.data[i].qty;
                        let price = res.data[i].Service.price;
                        totalPrice+=qty*price;
                      }
            
                      console.log("TotalPrice: ",totalPrice);
                      setTotalCost(totalPrice);
                }
            }else{
                console.log(res.status);
                setCartItemList([]);
            }
        })


    }catch(error: any){
        console.log(error);
    }
}

    return(
        <CustomerLayout>
            <div className={styles['container']}>
                <div className={styles['left-container']}>
                    <ShoppingCard modal={openModal} cartList={cartItemList} resetUI={resetUI}  finalList={setFinalList}></ShoppingCard>
                    <div>
                        <DefaultAddress></DefaultAddress>
                    </div>
                    {/* <span onClick={() => console.log(cartItemList)}>Hello</span> */}
                    <div className="mt-50">
                        <PaymentMethod></PaymentMethod>
                    </div>
                </div>
                <div className={styles['right-container']}>
                    <OrderFrom></OrderFrom>
                    <PaymentSummary orderItemList={total} newPrice={totalCost}></PaymentSummary>
                </div>
            </div>
                <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">{selectedModalName}</h4>
                                </div>
                        } footer={
                            <div className="pt-20 pb-20 pr-0">
                                <Button className="mr-20" >Cancel</Button>
                                <Button className="ant-btn primary mr-21">Save Chages</Button>
                            </div>
                            } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            
                            {selectedModalName === "Edit Preferences" ? 
                            <EditPreferences></EditPreferences> 
                            : 
                            <>
                            </>
                            }
                </Modal>
        </CustomerLayout>



    )
}

export default ProductDetails;