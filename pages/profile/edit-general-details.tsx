import React, { useState } from 'react';
import { DatePicker, Form, Input, Select } from 'antd';

const { Option } = Select;

const EditGeneralDetails = (props: any) => {

 
    
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

    return(
        <div>
            <Form>
                <Form.Item label="First Name">
                    <Input value={props.firstName} onChange={(event) =>props.setFirstName(event.target.value)}></Input>
                </Form.Item>
                
                <Form.Item className="mt-10" label="Last Name">
                    <Input value={props.lastName} onChange={(event) =>props.setLastName(event.target.value)}></Input>
                </Form.Item>
                
                <Form.Item className="mt-10" label="Username">
                    <Input value={"Ehsaan"}></Input>
                </Form.Item>
                
                <Form.Item className="mt-10" label="Email">
                    <Input value={"Email"}></Input>
                </Form.Item>

                <Form.Item className="mt-10" label="Date of Birth">
                    <DatePicker onChange={onChange} />
                    {/* <Input value={props.dob} onChange={(event) => props.setDob(event.target.value)}></Input> */}
                </Form.Item>

                <Form.Item className="mt-10" label="Gender">
                    <Select defaultValue="Male" style={{ width: 120 }} onChange={(event) =>handleChange(event)}>
                        
                        {genders.map((gender) =>{
                            return(
                                <Option key={gender.id} value={gender.value}>{gender.value}</Option>
                            )
                        })}
                    </Select>
                </Form.Item>

            </Form>
        </div>
    )
}

export default EditGeneralDetails;