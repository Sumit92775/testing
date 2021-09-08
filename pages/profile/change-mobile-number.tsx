import React,{useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';


import styles from '../../styles/components/Profile-Change-Mobile-Number.module.scss'

import {Button, Input} from 'antd';
import ResetPassword from '../../components/Admin/kyc/ResetPassword';

const ChangePassword = () => {
      const [newMobileNumber, setMobileNumber] = useState("");
      const [newMobileNumberSetted, setNewMobileNumberSetted] = useState(false);
      const [time, setTime] = useState(30);
      const [hidden, setResendPassword] = useState("var(--dark-neutral-2)");
      const [otp, setOtp] = useState("");
      const [retypePassword, setRetypePassword] = useState("");
      const [errorMsg , setErrorMsg] = useState("");

      // update

      const setTimer = () =>{
        let sec = 30;
        let interval = setInterval(()=>{
            sec--;
            console.log("00 : "+sec);
            setTime(sec);
            if(sec == 0){
                clearInterval(interval);
                // setNewMobileNumberSetted(false);
                setResendPassword("visible");
                setResendPassword("var(--primary-1)")
            }
        },1000);
    }

    const validateOtp = () =>{
    }

    return ( 
        
        <>
        {newMobileNumberSetted == false ? 
            
            <div className={styles['container']}>
            
                <h6 style={{color : "var(--dark-neutral-4)"}}>New Mobile Number</h6>
                <Input placeholder="Enter Mobile Number" className={styles['password-input']} onChange={(event) => setMobileNumber(event.target.value)}></Input>
                <Button className="txt primary mt-20" onClick={() =>{
                    setNewMobileNumberSetted(true);
                    setTimer();
                }}>Submit</Button>
        
            </div>
            : 
            <div className={styles['container']}>
                <h6 style={{color : "var(--dark-neutral-4)"}}>Otp <span style={{color : "red"}}>*</span></h6>
                <Input placeholder="Enter Otp*" className={styles['password-input']} onChange={(event) => {setOtp(event.target.value)}}></Input>
                <span style={{color : "green"}}>One Time Password Successfuly Sent To Registered Mobile Number</span>
                <span>Did't Received Otp ? <span style={{color : hidden}}>Resend Otp</span> {"("+"00 :"+time+")"}</span>
                <Button className="primary txt mt-20" onClick={()=>validateOtp()}>Enter Code</Button>
            </div>


}

        </>

     );
}

 
export default ChangePassword;
