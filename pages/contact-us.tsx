import Image from 'next/image';
import ProductCard from '../components/Common/ProductCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Input, Select } from 'antd';
import PublicLayout from '../components/Public/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { addProvider } from '../actions/sponsoredProviders'
import astyles from '../styles/components/ContactUs.module.scss';
import {Form} from 'antd';
import { Option } from 'antd/lib/mentions';

const { TextArea } = Input;

export default function Home() {

  const handleChange = (value: any) =>{
    console.log(`selected ${value}`);
  }
  
const quantityList = [{value : 1},{value : 2}];

  return (

    <div className={astyles['container']}>
      <PublicLayout>
          <section className="banner home" id="test">
            <Image className="ht-100" layout="fill" src="/slider 1.jpg" alt="" />
            <div className={astyles['about-us-text-container']}>
              <h1 className={astyles['about-us-text']}>Contact us</h1>
            </div>
          </section>
          
          <section className="banner" style={{height : "fit-content", backgroundColor : "white"}}>
            <div className={astyles['contact-us-container']}>
              <div className={astyles['left-container']}>
              <div className={astyles['right-container']}>
                <div className={astyles['main-form']}>
                    <Form>
                      <Form.Item>
                        <div className="mb-30" style={{display : 'flex',alignItems : 'center', justifyContent : "space-evenly"}}>
                          <h2 style={{width : "fit-content"}}>Feel free to talk, We'll Listen</h2>
                        </div>
                      </Form.Item>

                      <Form.Item>
                        <div className={astyles['nt-container']}>
                          <Form.Item label="Name">
                            <Input></Input>
                          </Form.Item>

                          <Form.Item label="Telephone" style={{color : "white"}}>
                            <Input></Input>
                          </Form.Item>
                        </div>
                      </Form.Item>


                      <Form.Item label="Email Address">
                        <Input className="mb-10"></Input>
                      </Form.Item>
                    
                      <Form.Item label="Subject">
                        <Select className="mb-10" onChange={handleChange}>
                              {quantityList.map((obj)=>{
                                      return <Option key={`${obj.value}`} value={`${obj.value}`} >{obj.value}</Option>
                                  })}
                              </Select>
                      </Form.Item>

                      <Form.Item className="msg mb-15" label="Message">
                        <TextArea rows={4}></TextArea>
                      </Form.Item>

                      <Form.Item>
                        <div style={{display : "flex", alignItems : "center", justifyContent : "space-evenly"}}>
                          <Button className="ant-btn primary">Send Message</Button>
                        </div>
                      </Form.Item>
                    </Form>

                </div>
              </div>
              </div>
              
            </div>
          </section>
      </PublicLayout>
      </div>
  )
}