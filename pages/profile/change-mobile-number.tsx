// import React,{useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';


import styles from '../../styles/components/Profile-Change-Mobile-Number.module.scss'

// import {Button, Input, message} from 'antd';
import ResetPassword from '../../components/Admin/kyc/ResetPassword';
// import { sendPhoneOTP, validatePhoneNumber, verifyPhoneOTP } from '../../services/auth';
import React, { useEffect, useState } from 'react';
import {Button, Input, message, Form, Select} from 'antd';
// import styles from '../../styles/components/Profile-Change-Email.module.scss'
import { sendEmailOTP, sendPhoneOTP, validateEmail, validatePhoneNumber, verifyEmailOTP, verifyOTP, verifyPhoneOTP } from '../../services/auth';
import useTranslation from 'next-translate/useTranslation';

const ChangeMobileNumber = (props: any) => {

    const [newEmailSetted, setNewEmailSetted] = useState(false);
    const [hidden, setResendPassword] = useState("var(--dark-neutral-2)");
    const [btnEnabled, setBtnEnabled] = useState(true);
    const [btnEnabled1, setBtnEnabled1] = useState(true);
    const [nEmail, setNEmail] = useState("");

    const [number, setNumber] = useState("");

    const { t } = useTranslation('validator');

    const sendOTP = async () =>{
        let isSuccessfull = await sendPhoneOTP({
            phoneNumber : number
        });
        message.info("Otp send");
        message.info(isSuccessfull.message);
        message.config({duration: 5, top: 60})
        // message.error(isSuccessfull.message);
        

        if(isSuccessfull.status == true){
            setBtnEnabled1(false);
            message.info(isSuccessfull.message);
        }else{
            // alert(isSuccessfull.message);
            message.info(isSuccessfull.message);
        }
    }

    const checkPhoneNumber = (rule: any, value: any, callback: any) => {

        console.log("Inside CheckPhomeNumber!!");
        

        if(form.getFieldsValue().phoneNumber) {
            if(form.getFieldsValue().countryCode) {
                if((/^[1-9][0-9]{9}$/).test(form.getFieldsValue().phoneNumber)) {
                    validatePhoneNumber({phoneNumber: `${form.getFieldsValue().countryCode}${form.getFieldsValue().phoneNumber}`})
                    .then(res => {
                        if(res.status) {
                            callback();
                            setBtnEnabled(false);
                            setNumber(`${form.getFieldsValue().countryCode}${form.getFieldsValue().phoneNumber}`)
                        } else {
                            callback(false);
                            setBtnEnabled(true);
                            message.error(t('value already taken', { value: form.getFieldsValue().phoneNumber }));
                        }
                    })
                } else {
                    setBtnEnabled(true);
                    callback(t('invalid', {field: 'Store Mobile Number'}))
                }
            } else {
                setBtnEnabled(true);
                callback(t('please select country code'))
            }
        } else {
            callback();
        }
    }
    const [form] = Form.useForm();

    const resendOTP = () => {
        sendPhoneOTP({phoneNumber: number})
        .then(res => {
            message.config({duration: 5, top: 60});
            message.success( 'OTP Sent!' );
        })
        .catch(error => console.error(error))
    }

    const reVerifyOTP = () => {
        const formData = form.getFieldsValue();
        verifyPhoneOTP({
            phoneNumber: number,
            OTP: `${formData.otp1}${formData.otp2}${formData.otp3}${formData.otp4}`
        })
        .then(res => {
            if(res.statusCode == 404) {
                message.error( 'Invalid OTP!' );
            } else {
                message.config({duration: 5, top: 60});
                message.success( 'OTP Verified!' );
                props?.setMobileNumber(number);
                setNumber("");
                props.cancelModal();
                setNewEmailSetted(false);
            }
        })
        .catch(error => console.error(error))
    }

    const onKeyPress = (e: any) => {
        if(!(e.charCode >= 48 && e.charCode <= 57)) {
            e.preventDefault();
            return false;
        }
    }
    
    return(

        <>
        {
            newEmailSetted === false? 

            <div className={styles['container']}>
                <Form
                        className="grid-view grid-1 colgap-42 rowgap-10"
                        form={form}
                        // onFinish={onFinish}
                        layout="vertical">
                   <Form.Item>
                   <div className="phone-number grid-view">
                                <Form.Item className="full no-control" name={['countryCode']} label="Store Mobile Number" rules={[{ required: true }]}>
                                    
                                </Form.Item>
                                <Form.Item name={['countryCode']}  validateTrigger={['onSelect']} rules={[
                                    { required: true, message:  t('required', {field: 'Country Code'}) },
                                    ]}>
                                    <Select placeholder="+91">
                                        <Select.Option value="+91">+91</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name={['phoneNumber']} hasFeedback validateTrigger={['onBlur']} rules={[
                                    { required: true, message: t('required', {field: 'Mobile Number'}) },
                                    { validator: checkPhoneNumber }
                                    ]}>
                                    <Input placeholder="ex:9385738374" />
                                </Form.Item>
                            </div>
                   </Form.Item>
                    <Form.Item>
                        <Button className="primary txt mt-20" disabled={btnEnabled} onClick={()=>{setNewEmailSetted(true);
                        sendOTP();
                        }}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            :
            <div className="content-wrapper table auto-width">
            <div className="card card-555 center mt-67">
                <h4 className="center-text">Verify Your Phone</h4>
                <p>A Verification code was sent to your provided mobile phone number,<br/>
                    please enter the code to proceed</p>
                <Form
                    className="grid-view grid-1 colgap-42 rowgap-20 mt-25"
                    form={form}
                    layout="vertical">
                    <div className="verification-code">
                        <Form.Item name={['otp1']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp2']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp3']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp4']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                    </div>
                    <Button className="primary mb-3" onClick={reVerifyOTP}>Verify Code</Button>
                    <p>Didn&quot;t Received One? <strong><a onClick={resendOTP}>Resend Code</a></strong></p>
                </Form>
            </div>
        </div>
        }
        </>
    );
}
//       const [newMobileNumber, setMobileNumber] = useState("");
//       const [newMobileNumberSetted, setNewMobileNumberSetted] = useState(false);
//       const [time, setTime] = useState(30);
//       const [hidden, setResendPassword] = useState("var(--dark-neutral-2)");
//       const [otp, setOtp] = useState("");
//       const [retypePassword, setRetypePassword] = useState("");
//       const [errorMsg , setErrorMsg] = useState("");

//       // update

//       const setTimer = () =>{
//         let sec = 30;
//         let interval = setInterval(()=>{
//             sec--;
//             console.log("00 : "+sec);
//             setTime(sec);
//             if(sec == 0){
//                 clearInterval(interval);
//                 // setNewMobileNumberSetted(false);
//                 setResendPassword("visible");
//                 setResendPassword("var(--primary-1)")
//             }
//         },1000);
//     }

//     const validateOtp = () =>{
//     }

//     return ( 
        
//         <>
//         {newMobileNumberSetted == false ? 
            
//             <div className={styles['container']}>
            
//                 <h6 style={{color : "var(--dark-neutral-4)"}}>New Mobile Number</h6>
//                 <Input placeholder="Enter Mobile Number" className={styles['password-input']} onChange={(event) => setMobileNumber(event.target.value)}></Input>
//                 <Button className="txt primary mt-20" onClick={() =>{
//                     setNewMobileNumberSetted(true);
//                     setTimer();
//                 }}>Submit</Button>
        
//             </div>
//             : 
//             <div className={styles['container']}>
//                 <h6 style={{color : "var(--dark-neutral-4)"}}>Otp <span style={{color : "red"}}>*</span></h6>
//                 <Input placeholder="Enter Otp*" className={styles['password-input']} onChange={(event) => {setOtp(event.target.value)}}></Input>
//                 <span style={{color : "green"}}>One Time Password Successfuly Sent To Registered Mobile Number</span>
//                 <span>Didnt Received Otp ? <span style={{color : hidden}}>Resend Otp</span> {"("+"00 :"+time+")"}</span>
//                 <Button className="primary txt mt-20" onClick={()=>validateOtp()}>Enter Code</Button>
//             </div>


// }

//         </>

//      );
// }

 
export default ChangeMobileNumber;
