import { Button, Modal, Form } from 'antd';
import React, { useState } from 'react';
import AddAddress from './add-address-modal';

const DefaultAddress = (props : any) =>{

    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");
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
        if(type === "Email"){
            setchooseModalName(type);
        }else if(type === "Mobile Number"){
            setchooseModalName(type)
        }else if(type === "General details"){
            setchooseModalName(type);
            setFooter(true);
        }
    
        console.log(type);
    };
    

    return(
        <div className="mt-54 mr-20 mb-10" style={{display : "flex", alignItems : "center"}}>
            <div className="card card2 pt-17 pl-35 pr-15" style={{width : "390px !important"}}>
                <h5 className="mb-22">Default address</h5>
                {/* <div className={styles['df-address-container']}> */}
    
                    <div className="">
                        <div className="flex center-content" style={{justifyContent : "space-between"}}>
                            <span>Name</span>
                            <strong>Jonathan</strong>
                        </div>
     
                    </div>
                    <div className="">
                        <div className="flex center-content" style={{justifyContent : "space-between"}}>
                            <span>Email</span>
                            <strong>Jonathan@gmail.com</strong>
                        </div>
                    </div>


                    <div className="">
                        <div className="flex center-content" style={{justifyContent : "space-between"}}>
                            <span>Mobile</span>
                            <strong>00966 4 8490159</strong>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex" style={{justifyContent : "space-between"}}>
                            <span>Address</span>
                            <strong>Awali, ah, Al Madinah Al Munawar</strong>
                        </div>
                    </div>
                    {/* <div className="grid-view grid-2 mb-7">
                        <span><strong>Jonathan@gmail.com</strong></span>
                    </div> */}
                    {/* <div className="grid-view grid-2 mb-7">
                        <span>Mobile</span>
                        <span ><strong>00966 4 8490159</strong></span>
                    </div>
                    <div className="grid-view grid-2 mb-7">
                        <span>Address</span>
                        <span><strong>Awali, ah, Al Madinah Al Munawar</strong></span>
                    </div> */}
                {/* </div> */}
            </div>
            {props.type === "list" ? 
           <>
           </> 
            : 
            <Button style={{height : "60px", width : "fit-content"}} className="full-width mr-0 center-content ml-30" onClick={openModal}><span className="material-icons mr-5">add_circle_outline</span>Add Another Address</Button>
           
            }
            <Modal width="900px !important" style={{borderRadius :"15px", overflow : "hidden", width : "990px !important"}} title={
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

   )
}

export default DefaultAddress;