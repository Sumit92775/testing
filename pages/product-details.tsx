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
const [del, setDel] = useState(false);

const [cartItemList, setCartItemList] = useState([]);
const [orderList, setOrderList] = useState({
    "storeId": 3,
    "currencyId": 1,
    "patmentType": 1,
    "orderPriceWithoutPlatformChargesOrTaxes": 129,
    "PlatformCharges": 129,
    "taxes": 20,
    "totalOrderPrice": 250,
    "BookingTime": "2021-10-20 19:24:19",
    "giftCardID": [
      "GiftCard-Number1",
      "GiftCard-Number2"
    ],
    "Services": [
      {
        "serviceId": 17,
        "price": 50,
        "cartId": 1
      },
      {
        "serviceId": 6,
        "price": 50,
        "cartId": 2
      },
      {
        "serviceId": 4,
        "price": 150,
        "cartId": 4
      }
    ]
  });

  const [totalServices, setTotalServices] = useState([]);
  const [finalOrderList, setFinalOrderList] = useState([]);

useEffect(() =>{

    try{
        getItemInCart().then(res =>{
            if(res.status){
                if(res.data){
                    setCartItemList(res.data);
                    console.log("Cart List: ",res.data);
                    let serviceArray = Array();
                    
                    for(let i = 0 ; i < res.data.length ; i++){
                        
                        let cartId = res.data[i].id;
                        let serviceId = res.data[i].serviceId;
                        let storeId = res.data[i].Service.storeId;
                        let price = res.data[i].Service.price;
                        
                        serviceArray.push({
                            "serviceId": serviceId,
                            "price": price,
                            "cartId": cartId
                        })
                    }


                    // setTotalServices(serviceArray);

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
    setSelectedModal(!selectedModal      );

    switch(type){
        case "Edit Preferences" : setSelectedModalName("Edit Preferences");
        break;
    }
};
   


const resetUI = () =>{
    try{
        getItemInCart().then(res =>{
            if(res.status){
                setCartItemList(res.data);
                console.log("Cart List: ",res.data);
            }else{
                console.log(res.status);
                setCartItemList([]);
            }
        })

    }catch(error: any){
        console.log(error);
    }
}

const makeOrder = (services: any) =>{

}

    return(
        <CustomerLayout>
            <div className={styles['container']}>
                <div className={styles['left-container']}>
                    <ShoppingCard modal={openModal} setTotalServices={totalServices} setCartItemList={cartItemList} setOrderList={setOrderList}  resetUI={resetUI} setFinalOrderList={setFinalOrderList}></ShoppingCard>
                    <div>
                        <DefaultAddress></DefaultAddress>
                    </div>
                    <span onClick={() => console.log(cartItemList)}>Hello</span>
                    <div className="mt-50">
                        <PaymentMethod></PaymentMethod>
                    </div>
                </div>
                <div className={styles['right-container']}>
                    <OrderFrom></OrderFrom>
                    <PaymentSummary></PaymentSummary>
                </div>
            </div>
            {/* <div className={cx('ant-modal-wrap', 'modal-width')}> */}
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
            {/* </div> */}
        </CustomerLayout>



    )
}

export default ProductDetails;

// import React, { useEffect, useState } from 'react';
// import styles from '../styles/components/Product-Details.module.scss'
// import CustomerLayout from '../components/User/Customer-Layout';
// import ShoppingCard from './product-details/shopping-card';
// import OrderFrom from './product-details/order-from';
// import PaymentSummary from './product-details/payment-summary';
// import DefaultAddress from './product-details/address-card';
// import PaymentMethod from './product-details/payment-method';
// // import BookingAndPaymentsModal from './Booking-Payments-Modal';
// import { Button, Modal } from 'antd';
// import EditPreferences from './product-details/edit-preferences-modal';
// import cx from 'classnames';
// import { getItemInCart } from '../services/items';

// const ProductDetails = () =>{
   
// const [selectedModalName, setSelectedModalName] = useState("");
// const [selectedModal, setSelectedModal] = useState(false);
// const [subscriptionTiers, setSubscriptionTiers] = useState(false);
// const [del, setDel] = useState(false);

// const [cartItemList, setCartItemList] = useState([]);
// const [orderList, setOrderList] = useState({
//     "storeId": 3,
//     "currencyId": 1,
//     "patmentType": 1,
//     "orderPriceWithoutPlatformChargesOrTaxes": 129,
//     "PlatformCharges": 129,
//     "taxes": 20,
//     "totalOrderPrice": 250,
//     "BookingTime": "2021-10-20 19:24:19",
//     "giftCardID": [
//       "GiftCard-Number1",
//       "GiftCard-Number2"
//     ],
//     "Services": [
//       {
//         "serviceId": 17,
//         "price": 50,
//         "cartId": 1
//       },
//       {
//         "serviceId": 6,
//         "price": 50,
//         "cartId": 2
//       },
//       {
//         "serviceId": 4,
//         "price": 150,
//         "cartId": 4
//       }
//     ]
//   });

//   const [totalServices, setTotalServices] = useState([]);
//   const [finalOrderList, setFinalOrderList] = useState([]);

// useEffect(() =>{

//     try{
//         getItemInCart().then(res =>{
//             if(res.status){
//                 if(res.data){
//                     setCartItemList(res.data);
//                     console.log("Cart List: ",res.data);
//                     let serviceArray = Array();
                    
//                     for(let i = 0 ; i < res.data.length ; i++){
                        
//                         let cartId = res.data[i].id;
//                         let serviceId = res.data[i].serviceId;
//                         let storeId = res.data[i].Service.storeId;
//                         let price = res.data[i].Service.price;
                        
//                         serviceArray.push({
//                             "serviceId": serviceId,
//                             "price": price,
//                             "cartId": cartId
//                         })
//                     }


//                     setTotalServices(serviceArray);

//                 }

//             }else{
//                 console.log(res.status);
//             }
//         })


//     }catch(error: any){
//         console.log(error);
//     }
    
// },[])


// const handleOk = (evt : any) => {
//     console.log('ok clicked', evt)
// };

// const handleCancel = () => {
//     setSelectedModal(false);   
//     setSubscriptionTiers(false);
// };

// const openModal = (type : any) => {

//     console.log(type);
//     setSelectedModal(!selectedModal      );

//     switch(type){
//         case "Edit Preferences" : setSelectedModalName("Edit Preferences");
//         break;
//     }
// };
   


// const resetUI = () =>{
//     try{
//         getItemInCart().then(res =>{
//             if(res.status){
//                 setCartItemList(res.data);
//                 console.log("Cart List: ",res.data);
//             }else{
//                 console.log(res.status);
//                 setCartItemList([]);
//             }
//         })

//     }catch(error: any){
//         console.log(error);
//     }
// }

// const makeOrder = (services: any) =>{

// }

//     return(
//         <CustomerLayout>
//             <div className={styles['container']}>
//                 <div className={styles['left-container']}>
//                     <ShoppingCard modal={openModal} setTotalServices={totalServices} setCartItemList={cartItemList} setOrderList={setOrderList}  resetUI={resetUI} setFinalOrderList={setFinalOrderList}></ShoppingCard>
//                     <div>
//                         <DefaultAddress></DefaultAddress>
//                     </div>
//                     <span onClick={() => console.log(cartItemList)}>Hello</span>
//                     <div className="mt-50">
//                         <PaymentMethod></PaymentMethod>
//                     </div>
//                 </div>
//                 <div className={styles['right-container']}>
//                     <OrderFrom></OrderFrom>
//                     <PaymentSummary finalOrderlist={{"storeId": 3,
//     "currencyId": 1,
//     "patmentType": 1,
//     "orderPriceWithoutPlatformChargesOrTaxes": 129,
//     "PlatformCharges": 129,
//     "taxes": 20,
//     "totalOrderPrice": 250,
//     "BookingTime": "2021-10-20 19:24:19",
//     "giftCardID": [
//       "GiftCard-Number1",
//       "GiftCard-Number2"
//     ],
//     "Services": finalOrderList
//   }}></PaymentSummary>
//                 </div>
//             </div>
//             {/* <div className={cx('ant-modal-wrap', 'modal-width')}> */}
//                 <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
//                                 <div style={{width : "100%", 
//                                 height: "100%",
//                                 display: "grid",
//                                 gridTemplateColumns: "1fr",
//                                 alignItems: "center"}}>
//                                     <h4 className="txt primary">{selectedModalName}</h4>
//                                 </div>
//                         } footer={
//                             <div className="pt-20 pb-20 pr-0">
//                                 <Button className="mr-20" >Cancel</Button>
//                                 <Button className="ant-btn primary mr-21">Save Chages</Button>
//                             </div>
//                             } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            
//                             {selectedModalName === "Edit Preferences" ? 
//                             <EditPreferences></EditPreferences> 
//                             : 
//                             <>
//                             </>
//                             }
//                 </Modal>
//             {/* </div> */}
//         </CustomerLayout>



//     )
// }

// export default ProductDetails;