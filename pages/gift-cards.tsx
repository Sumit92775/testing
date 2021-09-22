import Head from 'next/head'
import GiftCard from '../components/Gift Card/GiftCard';
import ExpiredGiftCards from '../components/Gift Card/Expired-GiftCards';
import ShopCard from '../components/Gift Card/ShopCard';
import { Tabs, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useState } from 'react';
import { useRouter } from 'next/router';
import CustomerLayout from '../components/User/Customer-Layout';
import styles from '../styles/components/GiftCards.module.scss'

const { TabPane } = Tabs;

export default function GiftCards() {
    const count = [
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            expiry: '14 Nov, 2020',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            remainingBalance: '100',
            serviceProvider: 'Halais',
            value: '25',
            balance: '25',
        },
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            expiry: '14 Nov, 2020',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            remainingBalance: '100',
            serviceProvider: 'Halais',
            value: '25',
            balance: '25',
        },
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            expiry: '14 Nov, 2020',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            remainingBalance: '100',
            serviceProvider: 'Halais',
            value: '25',
            balance: '25',
        },
       
    ];

    const ShopGiftCardList = [
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            validFor: '10 Days After Purchase',
            price: '25',
            date: 'Nov 11, 2020 - Dec 31, 2020',
            value: '50',
        },
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            validFor: '10 Days After Purchase',
            price: '25',
            date: 'Nov 11, 2020 - Dec 31, 2020',
            value: '50',
        },
    ];
    
    const ExpiredCardList = [
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            expiry: '14 Nov, 2020',
            price: '25',
            remainingBalance: '50',
            storeName: 'halais',
        },
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            expiry: '14 Nov, 2020',
            price: '25',
            remainingBalance: '50',
            storeName: 'halais',
        },
    ];

    const [createGiftCard, setCreateGiftCard] = useState(false);

    const handleOk = () => {
        // console.log('ok clicked', evt);
    }

    const handleCancel = () => {
        setCreateGiftCard(false);
    }
    
    const openModal = (type :any) => {

        console.log(type);

        if(type === "create-gift-card"){
            setCreateGiftCard(true);
        }
    };

    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}kyc/${key}`)
    };

    return (
        <CustomerLayout>
            <div className="">
                <h3 className="mb-24">
                    Gift Cards
                    <Button className="primary pull-right" onClick={()=>openModal("create-gift-card")}>Create A Gift Card</Button>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}
                            >
                                <h4 className="txt primary">Create Gift Card</h4>
                            </div>

                    } footer={
                        <div style={{padding : "20px"}}>
                            <Button className="mr-20" >Cancel</Button>
                            <Button className="ant-btn primary mr-7">Create Gift Card</Button>
                        </div>
                        } visible={createGiftCard} onOk={handleOk} onCancel={handleCancel}>
                            {/* < CreateGiftCard/> */}
                        </Modal>


                </h3>


                <Tabs defaultActiveKey="1">
                    <TabPane tab="Active" key="1">
                        <h5>Your Active Gift Cards</h5>
                        <div className={styles['res-grid']}>
                            {count.map((a, i) => {
                                return <GiftCard key={i} card={a} />
                            })}
                        </div>
                    </TabPane>

                    <TabPane tab="Expired" key="2">
                        <h5>Your Expired Gift Cards</h5>
                        <div className={styles['res-grid']}>
                            {ExpiredCardList.map((a, i) => {
                                return <ExpiredGiftCards key={i} card={a} />
                            })}
                        </div>
                    </TabPane>

                    <TabPane tab="Shop" key="3">
                        <h5>Your Shop Gift Cards</h5>
                        <div className={styles['res-grid']}>
                            {ShopGiftCardList.map((a, i) => {
                                return <ShopCard key={i} card={a} />
                            })}
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </CustomerLayout>
    )
}
