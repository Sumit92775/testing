import React from 'react';
import { Tree, Collapse, Button, Image, Divider } from 'antd';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';

const ServiceDetails = () => {
    const BusinessType = [
        {
            title: 'Business',
            key: 'business',
        },
        {
            title: 'Freelancer',
            key: 'freelancer',
            children: [
                {
                    title: 'Male',
                    key: 'freelancer-male'
                },
                {
                    title: 'Female',
                    key: 'freelancer-female'
                }
            ],
        },
    ],
    Ratings = [
        {
            title: <span>4 <span className="material-icons">star</span> &amp; above</span>,
            key: 1
        },
        {
            title: <span>3 <span className="material-icons">star</span> &amp; above</span>,
            key: 2
        },
        {
            title: <span>2 <span className="material-icons">star</span> &amp; above</span>,
            key: 3
        },
        {
            title: <span>1 <span className="material-icons">star</span> &amp; above</span>,
            key: 4
        }
    ],
    DemographyServing = [
        {
            title: 'Male',
            key: 1
        },
        {
            title: 'Female',
            key: 2
        },
        {
            title: 'Kids',
            key: 3
        },
    ],
    Price = [
        {
            title: `Under ${process.env.currency}50`,
            key: 1
        },
        {
            title: `Under ${process.env.currency}100`,
            key: 2
        },
        {
            title: `Under ${process.env.currency}300`,
            key: 3
        },
    ],
    Categories = [
        {
            // title: <span><span className="material-icons mr-5">restaurant</span> <strong>Restaurants</strong></span>,
            title: 'Restaurants',
            icon: 'restaurant',
            key: 1,
            children: [
                {
                    title: `Fine Dining`,
                    key: '1-1'
                },
                {
                    title: `Casual Dining`,
                    key: '1-2'
                },
                {
                    title: `Food Truck`,
                    key: '1-3'
                },
            ]
        },
        {
            title: `Bakery & Desert`,
            key: 2
        },
        {
            title: 'Beauty Shop',
            key: 3
        },
    ];

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <div className="search-filter card no-shadow">
            <h5 className="pl-12">Service Details</h5>
            <Divider className="mt-10 mb-10" />
            <ul className="service-info p-12">
                <li>
                    <span className="material-icons">monetization_on</span>
                    Minimum Service Charge <strong>$49</strong>
                </li>
                <li>
                    <span className="material-icons">date_range</span>
                    <strong>Open Today</strong> (Mon - Sun)
                </li>
                <li>
                    <span className="material-icons">dinner_dining</span>
                    Serves <strong>Men, Women, Kids (3-14)</strong>
                </li>
                <li>
                    <span className="material-icons">wc</span>
                    Gender <strong>Male</strong>
                </li>
            </ul>
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Store Policies</h5>
            <div className="p-12 txt underline">
                <Link href="#" passHref={true}>Payments</Link>
                <br />
                <Link href="#" passHref={true}>Rescheduling and Cancellation</Link>
            </div>

            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Portfolio Images</h5>
            <div className="portfolio-images p-12">
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
            </div>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Gift Cards</h5>
            <div className="giftcard-images p-12">
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
            </div>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">About Me</h5>
            <p className="p-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Social Media</h5>
            <div className="social-media pl-12 pr-12 pb-12 pt-5">
                <a href="#" target="_blank"><FacebookIcon /></a>
                <a href="#" target="_blank"><TwitterIcon /></a>
                <a href="#" target="_blank"><YouTubeIcon /></a>
                <a href="#" target="_blank"><LinkedInIcon /></a>
            </div>
            
        </div>
    )
}

export default ServiceDetails
