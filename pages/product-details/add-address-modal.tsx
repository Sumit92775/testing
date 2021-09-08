import { Button, Carousel, Checkbox, Divider, Input, Modal } from 'antd';
import React, { createRef, useState } from 'react';
import {Form} from 'antd';
import DefaultAddress from './address-card';
import styles from '../../styles/components/Product-Details.module.scss'

const AddAddress = () =>{

    const addressFields = [{Name : "Jonathan",Email : "Jonathan@gmail.com", Mobile : "00966 4 8490159", Address : "Awali,ah, Al Madinah Al Munawar"}];
    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");
    const [footer, setFooter] = useState(true);


    const handleOk = (evt : any) => {
        console.log('ok clicked', evt)
    };
    
    const handleCancel = () => {
        setchooseModal(false);
    };
    
    const openModal = (type : any) => {
    
        setchooseModal(true);
    
        // setchooseModalName(type)
        if(type === "Email"){
            setchooseModalName(type);
        }else if(type === "Mobile Number"){
            setchooseModalName(type)
        }else if(type === "General details"){
            setchooseModalName(type);
            setFooter(true);
        }
    
        console.log(type);
        
        // console.log(type);
        // setChangePassword(true);
    };

    return(
        <div className="container" style={{height : "fit-content"}}>
        <div className={styles['add-address-modal-top-container']}>
            <div className="mr-20" style={{width : "fit-content"}}>
                <DefaultAddress type={"list"}></DefaultAddress>
            </div>

            <div className="mr-20" style={{width : "fit-content"}}>
                <DefaultAddress type={"list"}></DefaultAddress>
            </div>

            <div className="mr-0" style={{width : "fit-content"}}>
                <DefaultAddress type={"list"}></DefaultAddress>
            </div>
          
            <div className="mr-0" style={{width : "fit-content"}}>
                <DefaultAddress type={"list"}></DefaultAddress>
            </div>
          
            <div className="mr-0" style={{width : "fit-content"}}>
                <DefaultAddress type={"list"}></DefaultAddress>
            </div>

            
        </div>
        <div className="bottom-container">
            <div className="flex center-content">
                <Divider type="horizontal" style={{minWidth : "100% !important"}}></Divider>
                <h4 className="txt dark3 ml-10 mr-10">Or</h4>
                <Divider type="horizontal" style={{minWidth : "100% !important"}}></Divider>
            </div>
            <Form className="mt-70">
                <div className={styles['form-container']}>
                    <Form.Item label="Name">
                        <Input placeholder="Name"></Input>
                    </Form.Item>
                    
                    <Form.Item label="Email">
                        <Input placeholder="Email"></Input>
                    </Form.Item>
                </div>
                <div className={styles['form-container']}>
                    <Form.Item label="Mobile Number">
                        <Input placeholder="Name"></Input>
                    </Form.Item>
                    
                    <Form.Item label={<div>Address<span className="txt primary fz-14 ml-10 mt-10" style={{cursor : "pointer"}} onClick={openModal}>(Mark on Map)</span></div>}>
                        <Input placeholder="Address"></Input>
                    </Form.Item>
                </div>
            </Form>
            
            <div>
                <Checkbox className="pl-10">Mark this address as default</Checkbox>
            </div>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">Change {chooseModalName}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" >Cancel</Button>
                            <Button className="ant-btn primary mr-21">Save Chages</Button>
                        </div>} 
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "mark-on-map" ? 
                            <AddAddress></AddAddress> 
                            : 
                            <AddAddress></AddAddress>

                        }
                    </Modal>
        </div>
    </div>
    )
}

export default AddAddress;
