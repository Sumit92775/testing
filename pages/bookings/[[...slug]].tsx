import React from 'react'
import { useRouter } from 'next/router';
import UserLayout from '../../components/User/Layout';
import BookingRequests from '../../components/Bookings/BookingRequests';
import ConfirmedBookings from '../../components/Bookings/ConfirmedBookings';
import CompletedBookings from '../../components/Bookings/CompletedBookings';
import CancellationsRejections from '../../components/Bookings/CancellationsRejections';
import { Tabs } from 'antd';

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'booking-requests',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}bookings/${key}`)
    };
    
    return (
        <UserLayout>
            <div className="">
                <h3 className="mb-24">Bookings</h3>
                <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Booking Requests" key="booking-requests">
                        <BookingRequests />
                    </Tabs.TabPane>
                    {/* <Tabs.TabPane tab="Reschedule Requests" key="reschedule-requests">
                        <BookingRequests />
                    </Tabs.TabPane> */}
                    <Tabs.TabPane tab="Confirmed Bookings" key="confirmed-bookings">
                        <ConfirmedBookings />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Completed Bookings" key="completed-bookings">
                        <CompletedBookings />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Cancellations &amp; Rejections" key="cancellations-rejections">
                        <CancellationsRejections />
                    </Tabs.TabPane>
                </Tabs>
            </div>    
        </UserLayout>
    )
}

export default Index
