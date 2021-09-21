import React from 'react'
import { useRouter } from 'next/router';
import UserLayout from '../../components/User/Layout';
import { Tabs } from 'antd';
import AcceptedBookings from './accepted-bookings';
import PastBookings from './past-booking';
import RecheduleBookings from './reschedule';
import RejectedBookings from './rejected';
import CustomerLayout from '../../components/User/Customer-Layout';

const { TabPane } = Tabs;

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'booking-requests',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}bookings/${key}`)
    };
    
    return (
        <CustomerLayout>
            <div className="">
                <h3 className="mb-24">Bookings</h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Accepted" key="1">
                        <AcceptedBookings />
                    </TabPane>
                    <TabPane tab="Past Bookings" key="2">
                        <PastBookings />
                    </TabPane>
                    <TabPane tab="Rechedule" key="3">
                        <RecheduleBookings />
                    </TabPane>
                    <TabPane tab="Rejected &amp; Cancelled" key="4">
                        <RejectedBookings />
                    </TabPane>
                </Tabs>
            </div>    
        </CustomerLayout>
    )
}

export default Index;
