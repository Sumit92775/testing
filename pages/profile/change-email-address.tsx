import React, { useEffect, useState } from 'react';
import {Button, Input, message, Form} from 'antd';
import styles from '../../styles/components/Profile-Change-Email.module.scss'
import { sendEmailOTP, sendPhoneOTP, validateEmail, verifyEmailOTP, verifyOTP } from '../../services/auth';
import useTranslation from 'next-translate/useTranslation';
const ChangeEmail = (props:any) =>{

    const [newEmail, setNewEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [errorMsg , setErrorMsg] = useState("");
    const [newEmailSetted, setNewEmailSetted] = useState(false);
    const [hidden, setResendPassword] = useState("var(--dark-neutral-2)");
    const [btnEnabled, setBtnEnabled] = useState(true);
    const [btnEnabled1, setBtnEnabled1] = useState(true);
    const [nEmail, setNEmail] = useState("");
 

    const { t } = useTranslation('validator');

    const sendOTP = async () =>{
        let isSuccessfull = await sendEmailOTP({
            "email" : nEmail
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

    const checkEmail = (rule: any, value: any, callback: any) => {
        if(value) {
            if((/^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/).test(value)) {
                validateEmail({email: value})
                .then(res => {
                    if(res.status) {
                        setNEmail(value);
                        callback();
                        setBtnEnabled(false);
                        message.success(res.message);
                    } else {
                        callback('');
                        // setBtnEnabled(true);
                        message.error(t('value already taken', { value: value }));
                    }
                })
            } else {
                setBtnEnabled(true);
                callback(t('email', {field: 'Store Email'}))
            }
        } else {
            callback();
        }
    }

    const [form] = Form.useForm();

    const resendOTP = () => {
        sendEmailOTP({email: nEmail})
        .then(res => {
            message.config({duration: 5, top: 60});
            message.success( 'OTP Sent!' );
        })
        .catch(error => console.error(error))
    }

    const reVerifyOTP = () => {
        const formData = form.getFieldsValue();
        verifyEmailOTP({
            email: nEmail,
            OTP: `${formData.otp1}${formData.otp2}${formData.otp3}${formData.otp4}`
        })
        .then(res => {
            if(res.statusCode == 404) {
                message.error( 'Invalid OTP!' );
            } else {
                message.config({duration: 5, top: 60});
                message.success( 'OTP Verified!' );
                props.setEmail(nEmail);
                setNewEmailSetted(false);
                props.cancelModal;
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
                <Form>
                    <Form.Item name={['email']} hasFeedback label="Store Email" validateTrigger={['onBlur']} rules={[
                        { required: true, message: t('required', {field: 'Store Email'}) },
                        { validator: checkEmail },
                        ]}>
                        <Input placeholder="ex:halais" />
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
            <div className="card center mt-67">
                <h4 className="center-text">Verify Your Email</h4>
                <p>A Verification code was sent to your provided email address,<br/>
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
export default ChangeEmail;