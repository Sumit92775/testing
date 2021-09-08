import {Button, Form, Input, Select} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { useState } from 'react';
import styles from '../../styles/components/Card1-modal.module.scss'

const Card1Modal = () =>{
  
    const [selectedDay, setSelectedDay] =  useState("");
    const [activeLink, setActiveLink] =  useState(null);

    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

    let days_list = [
        {id : "1", classname : "day", day : "Mon"},
        {id : "2", classname : "day", day : "Tus"},
        {id : "3", classname : "day", day : "Wed"},
        {id : "4", classname : "day", day : "Thu"},
        {id : "5", classname : "day", day : "Fri"},
        {id : "6", classname : "day", day : "Sat"},
        {id : "7", classname : "day", day : "Sun"},
];

    const handleClick = (id : any) => {
        setActiveLink(id);
    };
  
    return(
        <div className={styles['container']}>
            <Form>
                <Form.Item label="Store Name">
                    <Input placeholder="Halais"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="Username">
                    <Input placeholder="@Halais123"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="Email">
                    <Input placeholder="Halais123@gmail.com"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="Store Mobile Number">
                    <Input placeholder="+966-505-5515-86"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="Store Landline Number">
                    <Input placeholder="+966-505-5515-86"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="Store Manager Name">
                    <Input placeholder="Jonathan"></Input>
                </Form.Item>
                <Form.Item className="mt-24" label="About Us">
                    <TextArea rows={4} placeholder="Jonathan"></TextArea>
                </Form.Item>
    
                <Form.Item className="mt-30">
                    <h5 className="normal"><span>Store Hours</span></h5>
                </Form.Item>
    
                <Form.Item>
                    <div className={styles['days-container']}>
                       
                       {days_list.map((daysObj) =>{
                           return(
                                <div key={daysObj.id} className={daysObj.classname+(daysObj.id === activeLink ? " active_item txt weight800" : "")} onClick={() => handleClick(daysObj.id)} style={{background : activeLink === daysObj.id ? "var(--dark-neutral-1)" : "var(--light-neutral-2)", color : activeLink === daysObj.id ? "white" : "var(--dark-neutral-1)"}}>
                                    {daysObj.day}
                                </div>
                            )
                       })}
    
                    </div>
                </Form.Item>
    
                <Form.Item className="mt-45" label="Hours From">
                    <div className={styles['timing-container']}>
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <span className="ml-5">Hrs</span>
                       </div>
    
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <span className="ml-5">Min</span>
                       </div>
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                       </div>
    
                    </div>
                </Form.Item>
           
                <Form.Item className="mt-26" label="Hours To">
                    <div className={styles['timing-container']}>
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <span className="ml-5">Hrs</span>
                       </div>
    
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <span className="ml-5">Min</span>
                       </div>
                       <div>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                       </div>
    
                    </div>
                </Form.Item>
    
                <Form.Item className="mt-26 mb-39">
                    <Checkbox>Use this timings for other weekdays</Checkbox>
                </Form.Item>
    
                <Form.Item>
                    <h5 className="normal">Social Media</h5>
                </Form.Item>
    
                <Form.Item>
                    <div className="user-ratings multi mt-30" style={{gridColumnGap : "44px"}}>
                        <Form.Item label="Facebook">
                            <Input placeholder="www.facebook.com/halais"></Input>
                        </Form.Item>
                        
                        <Form.Item label="Twitter">
                            <Input placeholder="www.twitter.com/halais"></Input>
                        </Form.Item>
                    </div>
                   
                    <div className="user-ratings multi mt-45" style={{gridColumnGap : "44px"}}>
                        <Form.Item label="Instagram">
                            <Input className="h43" placeholder="www.instagram.com/halais"></Input>
                        </Form.Item>
                        
                        <Form.Item label="Twitter">
                            <Input placeholder="www.snapchat.com/halais"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                
                <Form.Item className="mt-35" label="Add New">
                    <div className={styles['bottom-btn-container']}>
                        <Input></Input>
                        <Button className="txt primary">Add</Button>
                    </div>
                </Form.Item>
    
            </Form>
     
        </div>
 )
}
export default Card1Modal;