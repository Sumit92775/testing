import React,{useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';


import styles from '../../styles/components/Reset-Password.module.scss'

import {Input} from 'antd';

const ResetPassword = () => {

    
      const [oldPassword, setOldPassword] = useState("")
      const [newPassword, setNewPassword] = useState("");
      const [retypePassword, setRetypePassword] = useState("");
      // const [errorMsg , setErrorMsg] = useState("");


      useEffect(()=>{
        if(newPassword === retypePassword && (newPassword.length > 0 && retypePassword.length > 0)){
          console.log("Correct Password!!");
          // setErrorMsg("");
        }else if(newPassword.length == retypePassword.length && (newPassword.length > 0 && retypePassword.length > 0)){
          // setErrorMsg("Invalid Password");

        }
      })

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      // update

    return ( 
        <div className={styles['container']}>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Old Password</h6>
            <Input.Password className={styles['password-input']} onChange={(event) => setOldPassword(event.target.value)}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>New Password</h6>
            <Input.Password className={styles['password-input']} onChange={(event) => setNewPassword(event.target.value)}></Input.Password>

            <h6 style={{color : "var(--dark-neutral-4)"}}>Re-type Password</h6>
            <Input.Password className={styles['password-input']} onChange={(event) => setRetypePassword(event.target.value)}></Input.Password>

        </div>
     );
}

 
export default ResetPassword;
