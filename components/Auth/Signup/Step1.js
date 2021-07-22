import { Form, Input, Button, Radio, Checkbox, Select } from 'antd';
import React, { useState } from 'react';
import { RequiredMark } from 'antd/lib/form/Form';
import { useDispatch } from 'react-redux';
import { next } from '../../../actions/signup';

const Step1 = () => {
    const [form] = Form.useForm(),
    dispatch = useDispatch(),

    nextStep = () => dispatch(next());

    return (
        <>
            <div>
                <div className="content-wrapper table mb-56">
                    <h4 className="center-text mt-67 mb-67">Register To Sell Via Saloon Plus</h4>
                    <Form
                        className="grid-view grid-2 colgap-42 rowgap-24"
                        form={form}
                        layout="vertical">
                        <Form.Item className="span-2" label="Store Name">
                            <Input placeholder="ex:halais" />
                        </Form.Item>
                        <Form.Item label="Store Email">
                            <Input placeholder="ex:halais" />
                        </Form.Item>
                        <Form.Item className="phone-number" label="Store Mobile Number">
                            <Select placeholder="+91">
                                <Select.Option value="+91">+91</Select.Option>
                            </Select>
                            <Input placeholder="ex:9385738374" />
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item label="Confirm Password">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item className="span-2">
                            <Checkbox>Receive promotional emails &amp; Updates</Checkbox>
                        </Form.Item>
                        <div className="span-2 center">
                            <Button className="primary full-width" onClick={nextStep}>Save &amp; Continue</Button>
                            <p className="mt-14">
                                By Signing Up you agree with the <strong><a>terms and conditions</a></strong> of Saloon Plus to Register with the platform
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
            <section className="mt-100">
                <div className="banner banner-3"></div>
            </section>
        </>
    )
}

export default Step1
