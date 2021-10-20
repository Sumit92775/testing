import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/Public/Layout';
import ServiceCard from '../components/Cards/ServiceCard';
import ServiceDetails from '../components/Cards/ServiceDetails';
import Reviews from '../components/Common/Reviews';
import { Tree, InputNumber, Select, Form, Button, Input, Tabs } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StarOutlined } from '@material-ui/icons';

const ServiceDetail = () => {
    const router = useRouter(),
    { slug } = router.query;;
    const [ map, toggleMap ] = useState(<div className="full mtn-25"></div>);
    const [ selected_tab, changeSelectedTab ] = useState('restaurants'),
    
    onTabClick = (key:string, event: any) => {
        changeSelectedTab(key);
    };

    let listing = [
        {
            // ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            id: 1,
            image: '/Subscription-banner.png',
            title: 'Arabic Coffee',
            subTitle: '250kcal',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
            price: '49',
            size: 1,
            staff: 1,
            type: 1,
            availableSizes: [
                {value: 1, label: '80g'},
                {value: 2, label: '160g'}
            ],
            availableStaffs: [
                {value: 1, label: 'Staff 1'},
                {value: 2, label: 'Staff 2'},
                {value: 3, label: 'Staff 3'}
            ],
            availableTypes: [
                {value: 1, label: 'Dine In'},
                {value: 2, label: 'Take Away'},
            ]
        },
        {
            // ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            id: 2,
            image: '/Subscription-banner.png',
            title: 'Arabic Coffee',
            subTitle: '250kcal',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
            price: '49',
            size: 1,
            staff: 1,
            type: 1,
            availableSizes: [
                {value: 1, label: '80g'},
                {value: 2, label: '160g'}
            ],
            availableStaffs: [
                {value: 1, label: 'Staff 1'},
                {value: 2, label: 'Staff 2'},
                {value: 3, label: 'Staff 3'}
            ],
            availableTypes: [
                {value: 1, label: 'Dine In'},
                {value: 2, label: 'Take Away'},
            ]
        },
        {
            // ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            id: 3,
            image: '/Subscription-banner.png',
            title: 'Arabic Coffee',
            subTitle: '250kcal',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
            price: '49',
            size: 1,
            staff: 1,
            type: 1,
            availableSizes: [
                {value: 1, label: '80g'},
                {value: 2, label: '160g'}
            ],
            availableStaffs: [
                {value: 1, label: 'Staff 1'},
                {value: 2, label: 'Staff 2'},
                {value: 3, label: 'Staff 3'}
            ],
            availableTypes: [
                {value: 1, label: 'Dine In'},
                {value: 2, label: 'Take Away'},
            ]
        },
    ];
    
    const services = listing.map((item, i) => <ServiceCard key={i} item={item} /> ),
    user_types = ['Low to High', 'High to Low'],
    location = ['Location 1', 'Location 2'];

    return (
        <PublicLayout>
            <section className="banner banner-3">
                <Image layout="fill" src="/slider 1.jpg" alt="" />
            </section>
            <div className="search-page">
                <div>
                    <ServiceDetails />
                </div>
                <div className="search-results service-page">
                    <h3><StarOutlined /> Services</h3>
                    <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                        <Tabs.TabPane tab="Restaurants" key="restaurants">
                            <Form className="medium full-width">
                                <div className="pull-left auto-width mb-20" style={{ minWidth: '350px' }}>
                                    <Input className="search-field" size="small" placeholder="Search For Dishes" prefix={<span className="material-icons">search</span>} />
                                </div>
                                <Form.Item className="auto-width pull-right ml-30">
                                    <Select className="medium" defaultValue={location[0]}>
                                        {location.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item className="auto-width pull-right">
                                    <Select className="medium" defaultValue={user_types[0]}>
                                        {user_types.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Form>
                            <div className="service-details mt-30 mb-30">
                                <div>
                                    <h3 className="mb-30">Fine Dining</h3>
                                    <div>
                                        <h4 className="regular mb-20">Appetizer</h4>
                                        { services }
                                        <p className="fz-12 txt light1 center">end of Appetizer</p>
                                    </div>
                                    <div className="mt-50">
                                        <h4 className="regular mb-20">Entrees</h4>
                                        { services }
                                        <p className="fz-12 txt light1 center">end of Entrees</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="fz-19 mb-50">Fine Dining</h5>

                                    <div className="cart-items">
                                        <strong className="title">Order Value</strong>
                                        <ul>
                                            <li>
                                                Arabic Coffee
                                                <strong className="pull-right">$49</strong>
                                                <br />
                                                <InputNumber min={1} max={10} defaultValue={3} />
                                            </li>
                                            <li>
                                                Arabic Coffee
                                                <strong className="pull-right">$49</strong>
                                                <br />
                                                <InputNumber min={1} max={10} defaultValue={3} />
                                            </li>
                                            <li>
                                                Arabic Coffee
                                                <strong className="pull-right">$49</strong>
                                                <br />
                                                <InputNumber min={1} max={10} defaultValue={3} />
                                            </li>
                                        </ul>
                                    </div>
                                    <Button className="medium full-width primary mt-10">Continue To Cart</Button>

                                </div>
                            </div>
                            <Reviews />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Beauty Shops" key="beautyShops">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Clinics" key="clinics">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Driving Training" key="drivingTraining">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Beverages" key="beverages">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Bakery and Desserts" key="bakeryAndDesserts">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Sports Clubs" key="sportsClubs">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Venue" key="venue">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Gift Shop " key="giftShop">
                            { services }
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        </PublicLayout>
    )
}

export default ServiceDetail
