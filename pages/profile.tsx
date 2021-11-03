import React, { useEffect, useState } from 'react'
import { Button, Divider, message } from 'antd';
import styles from '../styles/components/Profile.module.scss';
import Modal from 'antd/lib/modal/Modal';
import ChangeEmail from './profile/change-email-address';
import ChangeMobileNumber from './profile/change-mobile-number';
// import Card1Modal from './profile/card1-modal';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';
import Card7AddAddress from './profile/card7-add-address';
import AddAddress from './product-details/add-address-modal';
import CardTemplate from './profile/card-template';
import EditGeneralDetails from './profile/edit-general-details';
import { editUserProfile, getAdditionDetails, getAddresses, getMyDetails } from '../services/addresses';
import ResetPassword from '../components/Common/ResetPassword';
import { changePassword } from '../services/auth';
import cx from 'classnames';
import AdditionalDetails from './profile/additional-details';
import { Form} from 'antd';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';

const Profile = (props: any) =>{

const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [chooseModalTitle, setchooseModalTitle] = useState("");
const [footer, setFooter] = useState(false);
const [userDetailsArray, setUserDetailsArray] = useState({});

const [additionDetailsObject, setAdditionDetailsObject] = useState([]);

const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [mobileNumber, setMobileNumber] = useState("");

const [notificationCount, setNotificationCount] = useState(0);
const [cartItemCount, setCartItemCount] = useState(0);


useEffect(() =>{
    message.config({duration: 5, top: 60})
    // message.error("hello");

    try{

        console.log("CHECK");
        
        getNotifications(1).then(res =>{
            if(res.status === 404 || res.status === 403 || res.status == false){
                setNotificationCount(0);
            }else{
                setNotificationCount(res?.newNotifications);
            }
        }).catch(error =>{
            console.log(error);
        })

        getCartStatus().then(res =>{
            if(res.status == false || res.status == 404 || res.status == 403){
                setCartItemCount(0);
                console.log("ResponseCart: ",res);
            }else{
                if(res.data){
                    console.log("Cart Count: ",res.data[0]);
                    setCartItemCount(res.data[0].cartCount);
                }else{

                }
            }
        })

    }catch(error: any){

    }
    getMyDetails().then((res)=>{
        if(res.status == true){
            setUserDetailsArray(res.UserData);
            setEmail(res.UserData.email);
            setMobileNumber(res.UserData.phoneNumber);
            setUserName(res.UserData.userName);
        }else{
            message.error(res.message);
        }
    }).catch(error =>{
        message.error(error);
    })

    getAdditionDetails().then(res =>{
        if(res){
            console.log("Response: ",res);
            
            setAdditionDetailsObject(res.addSettings);
            // message.success(res.message)
        }else{
            message.error(res.message);
        }
        // console.log(res);
    }).catch(error =>{
        message.error(error);
    })
    
},[]);


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
        setchooseModalName(type);
    }else if(type === "Change Mobile Number"){
        setchooseModalName(type);
    }else if(type === "General details"){
        setchooseModalName(type);
        setFooter(true);
    }
    else if(type === "Add Address"){
        setchooseModalName(type);
    }
    else if(type === "Change Password"){
        setchooseModalName(type);
    }
    else if(type === "Change Mobile Number"){
        setchooseModalName(type);
    }

    console.log(chooseModalName);

};

      const [oldPassword, setOldPassword] = useState("")
      const [newPassword, setNewPassword] = useState("");
      const [retypePassword, setRetypePassword] = useState("");
     
      const checkPassword = () =>{
      console.log("clicked");
        

          if((newPassword === retypePassword) && (oldPassword !== newPassword)){
              changePassword({
                  oldPassword: oldPassword,
                  newPassword: newPassword
              })
              
          }else if((retypePassword !== newPassword)){
              alert("Password Not Match");
          }
      }


      const resetUI = (edittedDetails: any) =>{
          setAdditionDetailsObject(edittedDetails);
      }

    return(
        <CustomerLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
        <div className={styles['main-container']}>
            <div>
                <ProfileLeft></ProfileLeft>
            </div>
            
            <div className={styles['main-container-right']} style={{overflow : "hidden"}}>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                        <div className={styles['card-header-container']}>
                            <h5 className="mt-22 pb-21 pl-27 pr-27">Profile
                                <span className={cx(styles['hover'], "txt fz-18 weight400 primary")} onClick={()=> openModal("Change Password")}>{"Change password"}</span>
                            </h5>
                        </div>
                    <Divider className="mt-0 mb-0"></Divider>
                <div className="pl-38 pr-38 pb-43">
                   
                    <CardTemplate setUserDetailsArray={setUserDetailsArray} userName={userName} email={email} mobileNumber={mobileNumber} itemList={userDetailsArray} modal={openModal} modalTitle={setchooseModalName}></CardTemplate>
                        
                    <div className={cx(styles['card-no-shadow'], "card card2 mt-40 p-0")}>
                            <h5 className="mt-10 mb-10 pl-20 pr-27 fz-18">{"Email & Mobile Number"}</h5>
                            <Divider className="mt-5 mb-0"></Divider>
                        <div className="grid-view grid-1 pl-30 pr-30 pt-20 pb-20">
                            <Form>
                                <Form.Item className="mb-10" label="Email">
                                    <div className="grid-view grid-2">
                                        <span className="">{email}</span>
                                        <span className="txt primary mr-50" onClick={() => openModal("Change Email")}>Change Email</span>
                                    </div>
                                </Form.Item>
                                <Form.Item label="Mobile Number">
                                    <div className="grid-view grid-2">
                                        <span>{mobileNumber}</span>
                                        <span className="txt primary" onClick={() => openModal("Change Mobile Number")}>Change Mobile Number</span>
                                    </div>                
                                </Form.Item>
                            </Form>    
                        </div>
                    </div>
                
                    <AdditionalDetails details={additionDetailsObject} setAdditionDetailsObject={setAdditionDetailsObject} resetUI={resetUI}/>

                    <Card7AddAddress modal={openModal} title={setchooseModalTitle} addressArray={props?.data}/>
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
                        // chooseModalName === "Change Email" ? 
                        // <div className="pt-20 pb-20 pr-0">
                        //     <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                        // </div>
                        //     : 
                        // <div className="pt-20 pb-20 pr-0">
                        //     {(chooseModalName === "Change Email" || chooseModalName === "Change Mobile Number") == true ? 
                        //     <>
                        //     </>
                        //     : 
                        //     <div>
                        //         <Button className="mr-20" onClick={handleCancel}>Cancel</Button> 
                        //         <Button className="ant-btn primary mr-21" onClick={() =>checkPassword()}>Save Chages</Button>
                        //     </div>
                        //     }
                        // </div>
                        ""
                        }
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "Change Password" ? 
                            <ResetPassword old={setOldPassword} newPassword={setNewPassword} retypePassword={setRetypePassword}/>

                            : 
                            chooseModalName === "Change Email" ? 
                            <ChangeEmail cancelModal={handleCancel} setEmail={setEmail}/>

                            : 
                            chooseModalName === "Change Mobile Number" ? 
                            <ChangeMobileNumber cancelModal={handleCancel} setMobileNumber={setMobileNumber}/>

                            : 
                            <>
                            </>
                            // <EditGeneralDetails></EditGeneralDetails>
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

Profile.getInitialProps = async (ctx: any) =>{
    const res = await getAddresses(ctx.req);
    return {data : res};
}



