import React, { useEffect, useState } from 'react';
import {Button, Input, message, Form} from 'antd';
import styles from '../../styles/components/Profile-Change-Email.module.scss'
import { sendEmailOTP, sendPhoneOTP, validateEmail, verifyEmailOTP, verifyOTP } from '../../services/auth';
import useTranslation from 'next-translate/useTranslation';
const ChangeEmail = (props:any) =>{

    const [newEmailSetted, setNewEmailSetted] = useState(false);
    const [btnEnabled, setBtnEnabled] = useState(true);
    const [btnEnabled1, setBtnEnabled1] = useState(true);
    
    const [nEmail, setNEmail] = useState("");
    const [msg, setMsg] = useState("");
 
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");

    const { t } = useTranslation('validator');

    const sendOTP = async () =>{

        console.log(nEmail);
        

        let isSuccessfull = await sendEmailOTP({
            "email" : nEmail
        });
        // message.info("Otp send");
        // message.info(isSuccessfull.message);
        message.config({duration: 5, top: 60})
        // message.error(isSuccessfull.message);
        

        if(isSuccessfull.status == true){
            setBtnEnabled1(false);
            // message.info(isSuccessfull.message);
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
                        callback();
                        setNEmail(value);
                        setBtnEnabled(false);
                        setMsg(`Email Available`);
                    } else {
                        callback(false);
                        setBtnEnabled(true);
                        setMsg("");
                        setNEmail("");
                        message.error(t('value already taken', { value: value }));
                    }
                })
            } else {
                setBtnEnabled(true);
                setMsg("");
                // setNEmail("");
                callback(t('email', {field: 'Store Email'}))
            }
        } else {
            callback();
            setMsg("");
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
        setOtp1(formData.otp1);
        setOtp2(formData.otp2);
        setOtp3(formData.otp3);
        setOtp4(formData.otp4);

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
                props?.setEmail(nEmail);
                setMsg("");
                setNEmail("");
                setOtp1("");
                setOtp2("");
                setOtp3("");
                setOtp4("");
                form.setFieldsValue({
                    opt1: "",
                    opt2: "",
                    otp3: "",
                    otp4: ""
                })        
                setNewEmailSetted(false);
                props.cancelModal();
            }
        })
        .catch(error => {
            console.error(error);
         
        })
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
                    <Form.Item initialValue={nEmail}  name={['email']} hasFeedback label="Store Email" validateTrigger={['onBlur']} rules={[
                        { validator: checkEmail },
                        ]}>
                        <Input placeholder="ex:halais" />
                    </Form.Item>
                    {
                        msg.length > 0 ? 
                        <Form.Item>
                            <span className="txt success float right">
                                {msg}
                            </span>
                        </Form.Item>
                        : 
                        <>
                        </>
                    }
                    <Form.Item>
                        <Button className="primary txt mt-20" disabled={btnEnabled} onClick={()=>{setNewEmailSetted(true);
                        sendOTP();
                        }}>Submit</Button>
                    </Form.Item>

                    <Form.Item className="pull right">
                        <Button className="txt primary" onClick={() =>{
                            props.cancelModal();
                            setNEmail("");
                            form.setFieldsValue({nEmail: ""});
                            setMsg("");
                            // form.getFieldsValue().email = "";
                            }}>Cancel</Button> 
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
                        <Form.Item initialValue={otp1} name={['otp1']}>
                            <Input value={otp1} maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item initialValue={otp2} name={['otp2']}>
                            <Input value={otp2} maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item initialValue={otp3} name={['otp3']}>
                            <Input value={otp3} maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item initialValue={otp4} name={['otp4']}>
                            <Input value={otp4} maxLength={1} onKeyPress={ onKeyPress } />
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