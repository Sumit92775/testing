import React, { useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Profile.module.scss';
import Card1 from './profile/card1';
import Card2 from './profile/card2';
import Card3 from './profile/card3';
import Card4 from './profile/card4';
import Card5 from './profile/card5';
import Card6 from './profile/card6';
import Modal from 'antd/lib/modal/Modal';
import ChangeEmail from './profile/change-email-address';
import ChangePassword from './profile/change-mobile-number';
import Card1Modal from './profile/card1-modal';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';


const Profile = () =>{

const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [chooseModalTitle, setchooseModalTitle] = useState("");
const [footer, setFooter] = useState(false);


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setchooseModal(false);
};

const openModal = (type : any) => {

    setchooseModal(true);

    // setchooseModalName(type)
    console.log("setModal : "+type);
    
    if(type === "Change Email"){
        setchooseModalName(type);
    }else if(type === "Change Mobile Number"){
        setchooseModalName(type);
    }else if(type === "General details"){
        setchooseModalName(type);
        setFooter(true);
    }

    console.log(chooseModalName);

};


    return(
        <CustomerLayout>
        <div className={styles['main-container']}>
            <div>
                <ProfileLeft></ProfileLeft>
            </div>

            <div className={styles['main-container-right']}>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                        <div className={styles['card-header-container']}>
                            <h5 className="mt-22 pb-21 pl-27 pr-27">Profile
                            </h5>
                        </div>
                    <Divider className="mt-0 mb-0"></Divider>
                <div className="pl-38 pr-38 pb-43">
                        <Card1 modal={openModal} title={setchooseModalTitle}></Card1>
                        <Card2></Card2>
                        <Card3></Card3>
                        <Card4></Card4>
                        <Card5></Card5>
                        <Card6></Card6>
                </div>

                <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">Change {chooseModalTitle}</h4>
                            </div>
                    } footer={footer ? <div>
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" >Cancel</Button>
                            <Button className="ant-btn primary mr-21">Save Chages</Button>
                        </div>
                    </div> : ""} 
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "Change Email" ? 
                            <ChangeEmail></ChangeEmail> : 
                            
                            chooseModalName === "Change Mobile Number" ? 
                            <ChangePassword></ChangePassword> : 
                            <Card1Modal></Card1Modal>
                        }
                    </Modal>

                </div>
            </div>     
            </div>
        </div>    
    </CustomerLayout>
    )
}
export default Profile;