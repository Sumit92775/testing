import React, { useEffect, useState } from "react";
import { Delete } from "@material-ui/icons";
import { Button, Checkbox, Divider, message, Modal } from "antd";
import styles from './Styles.module.scss';
import cx from 'classnames';
import AddAddress from "../product-details/add-address-modal";
import { addAddressUser, markAsDefault } from "../../services/addresses";


const Card7AddAddress = (props : any) =>{


    const [isAddressPresent, setIsAddressPresent] = useState(false);
    const [presentaddress, setPresentAddress] = useState([] = Array());
    const [checked, setChecked] = useState(false);

    console.log(props);

    useEffect(() =>{

        console.log("useEffect run");
        let addressArray = [];
        addressArray = props.addressArray?.addresses;
        if(addressArray.length > 0){
            setIsAddressPresent(true);
            setPresentAddress(addressArray);
        }else{
            setIsAddressPresent(false);
            setPresentAddress([]);
        }     
    },[]);

    const makeFormatAddress = (address: any) =>{
        console.log(address);

        let formatAddress = "";

        if(address.houseNumber){
            formatAddress+=address.houseNumber+", "
        }
       
        if(address.streetAddress){
            formatAddress+=address.houseNumber+", "
        }
       
        if(address.add1){
            formatAddress+=address.add1+", "
        }

        
        if(address.add2){
            formatAddress+=address.add2+", "
        }

        if(address.city){
            formatAddress+=address.city+", "
        }
       
        if(address.zipCode){
            formatAddress+=address.city+", "
        }
        
        if(address.country){
            formatAddress+=address.country
        }

        return formatAddress;
    }

    const addAddress = (newAddress: any) =>{
        
        // console.log(newAddress);
        
        addAddressUser(
            {
                "name":newAddress.name,
                "email":newAddress.email,
                "phoneNumber":newAddress.mobileNumber,
                "latitude":"newAddress.lat",
                "longitude":"newAddress.long",
                "storeId":0,
                "houseNumber":newAddress.houseNumber,
                "streetAddress":"newAddress.streetNumber",
                "add1":newAddress.add1,
                "add2":newAddress.add2,
                "city":newAddress.city,
                "state":"newAddress.state",
                "country":newAddress.country,
                "zipCode":newAddress.pincode,
                "googleAddress":"",
                "isDefault":0
            }
            )

            let array = new Array();
            array = presentaddress;
            array.push( {
                "name":newAddress.name,
                "email":newAddress.email,
                "phoneNumber":newAddress.mobileNumber,
                "latitude":"newAddress.lat",
                "longitude":"newAddress.long",
                "storeId":0,
                "houseNumber":newAddress.houseNumber,
                "streetAddress":"newAddress.streetNumber",
                "add1":newAddress.add1,
                "add2":newAddress.add2,
                "city":newAddress.city,
                "state":"newAddress.state",
                "country":newAddress.country,
                "zipCode":newAddress.pincode,
                "googleAddress":"",
                "isDefault":0,
            })
            setPresentAddress(array);
            handleCancel;
    }

    
    
const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [chooseModalTitle, setchooseModalTitle] = useState("");
const [footer, setFooter] = useState(false);
const [defaultAddressChoosed, setDefaultAddressChoosed] = useState(false)
const [defaultIdSetted, setDefaultIdSetted] = useState(0);


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
    // setchooseModalName(type);
    
    if(type === "Change Email"){
    }else if(type === "Change Mobile Number"){
        setchooseModalName(type);
    }else if(type === "General details"){
        setchooseModalName(type);
        setFooter(true);
    }
    else if(type === "Add Address"){
        setchooseModalName(type);
    }

    console.log(chooseModalName);
};

    const handelMarkAsDefault = async (id: any) =>{
        let res = await markAsDefault({
            "addressId": id
        });

        // let selectedValue = defaultAddressChoosed;
        setDefaultAddressChoosed(true);
        setDefaultIdSetted(id);
        message.info(res.message);

    }

    return(
        <div className={cx(styles['card-no-shadow'], "card card2 pl-0 pt-0 pr-9 pb-0 mt-40")}  style={{overflow:"hidden", width:"100%"}}>
            <h5 className=" fz-18 mt-10 mb-10 pl-20">Saved Addresses</h5>
            <Divider className="full-width mt-5 mb-10"></Divider>
            <div className={cx(styles['scrollable-flex-design'],'mb-20')}>
                {presentaddress.map((address: any) =>{
                    return(
                        <div key={`${address.id}`} className={styles['address-div']}>
                            {/* <div className="grid-view grid-1 pl-20 pr-20 pt-20 pb-20 rowgap-20 colgap-5" style={{height : "200px"}}> */}
                                <div className="card card2 pl-10 pt-10 pr-10 pb-10" style={{height :"100%"}}>
                                    <div className="grid-view grid-1 rowgap-5">
                                        <div className="grid-view auto-width grid-1 mb-5">
                                            <h5>{address.name}
                                                <span className="txt pull right">
                                                    <Delete />
                                                </span>
                                                {/* <Button className="primary small pull right" type="link" onClick={()=>{openModal("Add Address");props.title("Add Address")}}><span className="icon-wrap"><EditIcon /></span></Button> */}
                                                {/* <Button className="danger small pull right" type="link" onClick={()=>{openModal("Add Address");props.title("Add Address")}}><span className="icon-wrap"> */}
                                                    
                                                    {/* </span></Button> */}
                                            </h5>
                                        </div>

                                        {/* <span className="txt weight700 float left ">{address.name}</span> */}
                                        
                                        {address.email ? 
                                
                                            <span className="txt weight700 float left">Jonathan@gmail.com</span>
                                        
                                        : 
                                        <>
                                        </>
                                        }
                                        
                                        {/* <div className="grid-view auto-width grid-2"> */}
                                            {/* <span>Mobile</span> */}
                                            <span className="txt weight700 float left">00966 4 8490159</span>
                                        {/* </div> */}
                                        {/* <div className={cx(styles['overflow'], "grid-view auto-width grid-1")}> */}
                                            {/* <span>Address </span> */}
                                            <span className={cx(styles['text-overflow'], "txt weight700 float left")} >{makeFormatAddress(address)}</span>
                                        {/* </div> */}

                                        <span className="danger small pull right flex center-content" style={{position : "absolute", bottom: "10px", left: "80px"}}>
                                            {address.isDefault == 0 ? 
                                            <Checkbox onChange={(event) =>{setChecked(event.target.checked);
                                            handelMarkAsDefault(address.id);
                                            }}><span className="txt primary">Mark as default</span></Checkbox>
                                            : 
                                            <span className="txt primary">Default Address</span>
                                            }
                                        </span>

                                    </div>    
                                </div>
                            {/* </div> */}
                        </div>
                    )
                })}

            <div>
                {/* <div className="grid-view grid-1 pl-20 pr-20 pt-20 pb-20 rowgap-20 colgap-5" style={{height: "210px"}}> */}
                    <div className="card card2 pl-10 pt-10 pr-10 pb-10 flex center" style={{height: "100%", width: "300px",display: "flex", alignItems :"center", justifyContent : "space-evenly"}}>
                    {/* <div className={'card card2 pl-10 pt-10 pr-10 pb-10 flex')}> */}
                        <Button onClick={()=>{openModal("Add Address")}}>
                            Add Address
                        </Button>   
                    {/* </div> */}
                </div>
            </div>
            </div>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{chooseModalName}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                            {/* <Button className="ant-btn primary mr-21" onClick={() =>handleCancel}>Save Chages</Button> */}
                        </div>
                        }
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "Add Address" ? 
                            <AddAddress addAddress={addAddress} closeModal={handleCancel}></AddAddress>
                            : 
                            <>
                            </>
                            // <EditGeneralDetails></EditGeneralDetails>

                        }
                    </Modal>


            {/* <div>
                <div className=" grid-view grid-3 pl-20 pr-20 pt-20 pb-20 rowgap-20 colgap-5">
                    <div className="card card2 pl-10 pt-10 pr-10 pb-10">
                        <div className="grid-view grid-1 rowgap-5">
                            <div className="grid-view auto-width grid-1 mb-5">
                                <h5>Default Address</h5>
                            </div>
                            <div className="grid-view auto-width grid-2">
                                <span className="txt dark1 weight400">Name </span>
                                <span className="txt weight700 float right ">Jonathan</span>
                            </div>
                            <div className="grid-view auto-width grid-2">
                                <span>Email</span>
                                <span className="txt weight700 float right">Jonathan@gmail.com</span>
                            </div>
                            <div className="grid-view auto-width grid-2">
                                <span>Mobile</span>
                                <span className="txt weight700 float right">00966 4 8490159</span>
                            </div>
                            <div className="grid-view auto-width grid-2">
                                <span>Address </span>
                                <span className="txt weight700 float right">Awali,ah,Al Madinah Al Munawar</span>
                            </div>

                        </div>    
                    </div>
                </div>
            </div> */}

            {/* <div className="grid-view grid-3 pl-20 pr-20 pt-20 pb-20 rowgap-20 colgap-5">
                <div className="card card2 pl-10 pt-10 pr-10 pb-10">
                    <div className="grid-view grid-1 rowgap-5">
                        <div className="grid-view auto-width grid-2">
                            <span className="txt dark1 weight400">Name </span>
                            <span className="txt weight700 float right ">Jonathan</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Email</span>
                            <span className="txt weight700 float right">Jonathan@gmail.com</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Mobile</span>
                            <span className="txt weight700 float right">00966 4 8490159</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Address </span>
                            <span className="txt weight700 float right">Awali,ah,Al Madinah Al Munawar</span>
                        </div>

                    </div>
                </div>
                <div className="card card2 pl-10 pt-10 pr-10 pb-10">
                    <div className="grid-view grid-1 rowgap-5">
                        <div className="grid-view auto-width grid-2">
                            <span className="txt dark1 weight400">Name </span>
                            <span className="txt weight700 float right ">Jonathan</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Email</span>
                            <span className="txt weight700 float right">Jonathan@gmail.com</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Mobile</span>
                            <span className="txt weight700 float right">00966 4 8490159</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Address </span>
                            <span className="txt weight700 float right">Awali,ah,Al Madinah Al Munawar</span>
                        </div>

                    </div>
                </div>
                <div className="card card2 pl-10 pt-10 pr-10 pb-10">
                    <div className="grid-view grid-1 rowgap-5">
                        <div className="grid-view auto-width grid-2">
                            <span className="txt dark1 weight400">Name </span>
                            <span className="txt weight700 float right ">Jonathan</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Email</span>
                            <span className="txt weight700 float right">Jonathan@gmail.com</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Mobile</span>
                            <span className="txt weight700 float right">00966 4 8490159</span>
                        </div>
                        <div className="grid-view auto-width grid-2">
                            <span>Address </span>
                            <span className="txt weight700 float right">Awali,ah,Al Madinah Al Munawar</span>
                        </div>

                    </div>
                </div>
            </div>
           */}

            {/* <Divider className="mt-12 mb-12 mb-0"></Divider> */}
            {/* <div>
                <div className="ml-32 mt-5 mb-15">
                    <Button className="primary small mr-33" type="link" onClick={()=>{openModal("Add Address");
                    props.title("Add Address")
                    }}><span className="icon-wrap"><EditIcon /></span>Change Address/Add Address</Button>
                </div>
            </div> */}
        </div>
    )
}
export default Card7AddAddress;