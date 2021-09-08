import React, { useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/notifications.module.scss';
import Layout from '../components/User/Layout'
import SettingCard from '../components/Common/SettingCard'
import Modal from 'antd/lib/modal/Modal';
import ResetPassword from '../components/Common/ResetPassword';
import GeneralSettingsModal from '../pages/settings-modals/Edit-General-Settings_Modal';
import BookingAndPaymentsModal from './settings-modals/Booking-Payments-Modal';
import NotificationAndSecurity from './settings-modals/Notification-And-Security.Modal';
import Link from 'next/link';
import ProfileLeft from './profile-left';

const Notifications = () => {

    let profileCards = [
        {title : "Notification & Security",modalName : "notification_and_security", content : [{0 : "Notification Methods", 1 : "SMS, E-Mail"},
            {0 : "Password", 1 : "xxxxxx"},
            {0 : "Date Format", 1 : "18 Nov, 2020"}]}
];

const [selectedModalName, setSelectedModalName] = useState("");
const [selectedModal, setSelectedModal] = useState(false);
const [viewDetail, setViewDetail] = useState(false);
const [del, setDel] = useState(false);

const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
};

const openModal = (type : any) => {

    console.log(type);
    setSelectedModal(true);

    switch(type){
        case "general_settings" : setSelectedModalName("General Settings");
        break;
        
        case "notification_and_security" : setSelectedModalName("Notification And Security");
        break;
        
        case "booking_and_payments" : setSelectedModalName("Booking And Payments");
        break;
        
        case "subscription_tier" : setSelectedModalName("Subscription Tiers");
        break;
    }
};


    return(
        <Layout>
            <div className={styles['main-container']}>
                <div>
                    <ProfileLeft></ProfileLeft>
                </div>
                <div className={styles['main-container-right']}>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                    <h5 className="mt-22 pb-21 pl-27 pr-27">Notifications</h5>
                    <Divider className="mt-0"></Divider>
                   <div className="pt-20 pl-38 pr-38">
                       {
                           profileCards.map((cardDetails) =>{
                               return(
                                   <div className="mb-40" key={`${cardDetails}`}>
                                       <SettingCard modal={openModal} modalName={cardDetails.modalName} cardDetails={cardDetails}></SettingCard>
                                   </div>
                               )
                           })
                       }
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
                        {selectedModalName === "General Settings" ?
                        <GeneralSettingsModal></GeneralSettingsModal>
                        :
                        selectedModalName === "Notification And Security" ? 
                         <NotificationAndSecurity></NotificationAndSecurity>:
                        
                        selectedModalName === "Booking And Payments" ? 
                        <BookingAndPaymentsModal></BookingAndPaymentsModal> :
                        <ResetPassword></ResetPassword> 

                        }
                </Modal>

            </div>     
            </div>
            </div>    
        </Layout>
    
    )
}

export default Notifications;
