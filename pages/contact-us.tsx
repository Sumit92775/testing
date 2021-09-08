/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import ProductCard from '../components/Common/ProductCard';

import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Input, Select } from 'antd';
import PublicLayout from '../components/Public/Layout';
import Tag from '../components/Common/Tag';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { addProvider } from '../actions/sponsoredProviders'
import styles from '../styles/pages/Index.module.scss';
import astyles from '../styles/components/ContactUs.module.scss';
import {Form} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Option } from 'antd/lib/mentions';
import { useEffect } from 'react';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Home() {
  const dispatch = useDispatch();
  let items = useSelector((state:{sponsoredProviders: any}) => state.sponsoredProviders);

  let products = [
    {
      image: '/product (1).png',
      name: 'Dorman Beauty Clinic',
      rating: 5.0,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (2).png',
      name: 'Dorman Beauty Clinic',
      rating: 3.2,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (3).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (4).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (5).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
  ];
  let tags = [
    {
      name: 'Restaurants',
      icon: 'room_service',
      selected: true
    },
    {
      name: 'Beauty Shops',
      icon: 'local_florist',
      selected: false
    },
    {
      name: 'Clinics',
      icon: 'local_pharmacy',
      selected: false
    },
    {
      name: 'Driving Training',
      icon: 'bluetooth_drive',
      selected: false
    },
    {
      name: 'Beverages',
      icon: 'local_bar',
      selected: false
    },
    {
      name: 'Bakery and Desserts',
      icon: 'fastfood',
      selected: true
    },
    {
      name: 'Sports Clubs',
      icon: 'directions_bike',
      selected: true
    },
    {
      name: 'Venue',
      icon: 'meeting_room',
      selected: false
    },
    {
      name: 'Gift Shop',
      icon: 'card_giftcard',
      selected: false
    }
  ],
  loadMore = () => {
    products.map((product, j) => {
      const id = `${Date.now()}${j}`;
      dispatch(addProvider(<ProductCard product={{...product, id: id}} key={id} />))
    })
  };

  // useEffect(()=>{
  //   window.scrollTo(0, offsetTop)
  // })

  const scrollToo = (ref : any) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
              <div className={astyles['left-container']}></div>
              <div className={astyles['right-container']}>
                <div className={astyles['main-form']}>

                    <Form>
                      <Form.Item>
                        <div className="mb-30" style={{display : 'flex',alignItems : 'center', justifyContent : "space-evenly"}}>
                          <h2 style={{width : "fit-content"}}>Feel free to talk</h2>
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

                      <Form.Item className="msg" label="Message">
                        <Input className={astyles['mi-container']}></Input>
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
          </section>

          <section className="p-35">
            <div className={astyles['have-a-product']}>
                <div className={astyles['hap-text-container']}>
                    <h1>Have a product or service to sell?</h1>
                    <span className="mb-24">Reach to 1000’s of buyers at once</span>
                    <Button>Get Started Now</Button>
                </div>
                <div>
                    <img src="/have-a-product.png" alt="" />
                </div>
            </div>
          </section>
      </PublicLayout>
      </div>
  )
}