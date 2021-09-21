import React, { useEffect, useState } from 'react';
import {Button, Input} from 'antd';
import styles from '../../styles/components/Profile-Change-Email.module.scss'

const ChangeEmail = () =>{

    const [newEmail, setNewEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [errorMsg , setErrorMsg] = useState("");
    const [newEmailSetted, setNewEmailSetted] = useState(false);
    const [time, setTime] = useState(30);
    const [hidden, setResendPassword] = useState("var(--dark-neutral-2)");

    const setEmail = (event :any) =>{
        console.log(event);
        setNewEmail(event);
    }

    const validateOtp = () =>{
    }

    const setTimer = () =>{
        let sec = 30;
        let interval = setInterval(()=>{
            sec--;
            console.log("00 : "+sec);
            setTime(sec);
            if(sec == 0){
                clearInterval(interval);
            }
        },1000);
    }

    return(

        <>
        {
            newEmailSetted === false? 

            <div className={styles['container']}>
                <h6 style={{color : "var(--dark-neutral-4)"}}>Email</h6>
                <Input placeholder="Enter Email" type="number" className={styles['password-input']} onChange={(event) => {setEmail(event.target.value)}}></Input>
                <Button className="primary txt mt-20" onClick={()=>{setNewEmailSetted(true);
                setTimer();}}>Submit</Button>
            </div>
            :
            <div className={styles['container']}>
                <h6 style={{color : "var(--dark-neutral-4)"}}>Otp <span style={{color : "red"}}>*</span></h6>
                <Input placeholder="Enter Otp*" className={styles['password-input']} onChange={(event) => {setOtp(event.target.value)}}></Input>
                <span style={{color : "green"}}>One Time Password Successfuly Sent To Registered Mobile Number</span>
                <span>Didnt Received Otp ? <span style={{color : hidden}}>Resend Otp</span> {"("+"00 :"+time+")"}</span>
                <Button className="primary txt mt-20" onClick={()=>validateOtp()}>Enter Code</Button>
            </div>

        }
        </>
    )

}

export default ChangeEmail;