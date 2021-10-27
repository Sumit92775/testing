import React, { useState } from 'react';
import { DatePicker, Form, Input, message, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;

const EditGeneralDetails = (props: any) => {

    const { t } = useTranslation('validator');
    const [form] = Form.useForm();
    
    function handleChange(value: any) {
        console.log(`selected ${value}`);
        if(value === "Male"){
            props.setGender("1");
        }
        else if(value === "Female"){
            props.setGender("2");
        }else{
            props.setGender("3");
        }
    }

    let genders = [
        {
            id: 1,
            value: "Male"
        },
        {
            id: 2,
            value: "Female"
        },
        {
            id: 3,
            value: "Other"
        },
    ]

    function onChange(date:any, dateString:any) {
        console.log(date, dateString);
        props.setDob(dateString);
      }

      const  checkUserName = (rule: any, value: any, callback: any) => {
        let name = value;
        if(name.charAt(0) === ' '){
            callback(t('First character never be space', {field: 'First Name'}));
        }else{
            for(let i = 0 ; i < name.length ; i++){
                let ch = name.charAt(i);
                if(parseInt(ch)){
                    callback('Integer not allowed', {field: 'First Name'})
                }else{
                    callback();
                }
            }
        }
    };
      
    const  checkLastName = (rule: any, value: any, callback: any) => {
        let name = value;
        if(name.charAt(0) === ' '){
            callback(t('First character never be space', {field: 'First Name'}));
        }else{
            for(let i = 0 ; i < name.length ; i++){
                let ch = name.charAt(i);
                if(parseInt(ch)){
                    callback('Integer not allowed', {field: 'First Name'})
                }else{
                    callback();
                }
            }
        }
    };

    return(
        <div>
            <Form>
                <Form.Item>
                    <div className="grid-view grid-2 colgap-30">
                        <Form.Item name={['userName']}  label="First Name" validateTrigger={['onBlur']} rules={[
                            { required: false, message: t('required', {field: 'First Name'}) },
                            { validator: checkUserName },
                            ]}>
                            <Input placeholder={props.firstName} maxLength={20} onChange={(event) =>props.setFirstName(event.target.value)}></Input>
                        </Form.Item>
                        
                        <Form.Item  name={['lastName']}  label="Last Name" validateTrigger={['onBlur']} rules={[
                            { required: false, message: t('required', {field: 'Last Name'}) },
                            { validator: checkLastName },
                            ]}>
                            <Input placeholder={props.lastName} maxLength={30} onChange={(event) =>props.setLastName(event.target.value)}></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                
                <Form.Item className="mt-10">
                    <div className="grid-view grid-2 colgap-30">
                        <Form.Item className="mt-10" label="Date of Birth">
                            <DatePicker placeholder={props.dob} onChange={onChange} />
                            {/* <Input value={props.dob} onChange={(event) => props.setDob(event.target.value)}></Input> */}
                        </Form.Item>

                        <Form.Item className="mt-10" label="Gender">
                            <Select defaultValue="Male" onChange={(event) =>handleChange(event)}>
                                
                                {genders.map((gender) =>{
                                    return(
                                        <Option key={gender.id} value={gender.value}>{gender.value}</Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditGeneralDetails;