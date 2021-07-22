import { Form, Input, Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { next } from '../../../actions/signup';

const Step1_2 = () => {
    const [form] = Form.useForm(),
    dispatch = useDispatch(),

    nextStep = () => dispatch(next());

    return (
        <div className="content-wrapper table auto-width">
            <div className="card card-555 center mt-67">
                <h4 className="center-text">Verify Your Phone</h4>
                <p>A Verification code was sent to your provided mobile phone number,<br/>
                    please enter the code to proceed</p>
                <Form
                    className="grid-view grid-1 colgap-42 rowgap-20 mt-25"
                    form={form}
                    layout="vertical">
                    <Form.Item className="verification-code">
                        <Input maxLength={1} />
                        <Input maxLength={1} />
                        <Input maxLength={1} />
                        <Input maxLength={1} />
                    </Form.Item>
                    <Button className="primary mb-3" onClick={nextStep}>Verify Code</Button>
                    <p>Didn&quot;t Received One? <strong><a>Resend Code</a></strong></p>
                </Form>
            </div>
        </div>
    )
}

export default Step1_2
