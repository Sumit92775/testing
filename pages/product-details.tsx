import React, { useState } from 'react';
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

const ProductDetails = () =>{
   
const [selectedModalName, setSelectedModalName] = useState("");
const [selectedModal, setSelectedModal] = useState(false);
const [subscriptionTiers, setSubscriptionTiers] = useState(false);
const [del, setDel] = useState(false);


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
   
    return(
        <CustomerLayout>
            <div className={styles['container']}>
                <div className={styles['left-container']}>
                    <ShoppingCard modal={openModal}></ShoppingCard>
                    <div>
                        <DefaultAddress></DefaultAddress>
                    </div>
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