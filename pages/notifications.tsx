import React, { useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/notifications.module.scss';
import Layout from '../components/User/Layout'
import SettingCard from '../components/Common/SettingCard'
import Modal from 'antd/lib/modal/Modal';
import ResetPassword from '../components/Common/ResetPassword';
import NotificationCard from '../components/Common/notification-card';
import GeneralSettingsModal from '../pages/settings-modals/Edit-General-Settings_Modal';
import BookingAndPaymentsModal from './settings-modals/Booking-Payments-Modal';
import NotificationAndSecurity from './settings-modals/Notification-And-Security.Modal';
import Link from 'next/link';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';

const Notifications = () => {

    let notificationCard = [
        {title : "Notification",modalName : "notification_and_security", content : 
        [
            {titleColor : "var(--secondary-1)", title : "Review", msg : "Reminder to provide review for completed booking SP15912501 Go to Completed bookings", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--primary-1)", title : "Review", msg : "Reminder to update the status of booking SP15912501 Go to  bookings", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "A new booking is made by Chris J for Beard Shaving. Respond to the booking now  Go to booking requests", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "Chris J has rescheduled the booking SP15912505 to 10/11/2020. Go to booking Requests ", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--primary-1)", title : "Review", msg : "Chris J has cancelled the booking SP15912505.", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "Halais 2 is requstion to join as your branch. Go to Branch Requests ", date : "02/11/2020 12:05 PM"},
        ]
    }
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
        <CustomerLayout>
            <div className={styles['main-container']}>
                <div>
                    <ProfileLeft></ProfileLeft>
                </div>
                <div className={styles['main-container-right']}>
            <div className={styles['wallet-deposit-container']}>
                
                       {
                           notificationCard.map((cardDetails) =>{
                               return(
                                   <div className="mb-40" key={`${cardDetails}`}>
                                       <NotificationCard modal={openModal} modalName={cardDetails.modalName} cardDetails={cardDetails}></NotificationCard>
                                   </div>
                               )
                           })
                       }


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
        </CustomerLayout>
    
    )
}

export default Notifications;
