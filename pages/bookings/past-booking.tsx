import React, {useState} from 'react';
import { Table, Button, Select, Menu, Switch, Form, Modal, Input, DatePicker, Rate, Tooltip } from 'antd';
import moment from 'moment';
// import MapView from './MapView';
const { Option } = Select;
const { RangePicker } = DatePicker;

import {LocationCity} from '@material-ui/icons'

import cx from 'classnames';

const PastBookings = () => {
    const [isVisible, toggleVisibility] = useState(false);
    
    const status = ['Pending', 'Rescheduled'],
    dataSource = [],
    columns = [
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'SP Name',
            dataIndex: 'spname',
            key: 'spname',
            render: function spname(spname : any) {
                return (
                    <div>
                        <strong>{ spname.spname }</strong><br/>
                        <span className="fz-11">{spname.service}</span>
                    </div>
                )
            }
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: function address(address : any) {
                return (
                    <div className="flex center">
                        <LocationCity/>
                        <span className="ml-3">{ address }</span>
                    </div>
                )
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: function date(date : any) {
                return <p>{ moment(date).format(`${process.env.date_format}`)}</p>
            }
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: function time(time : any) {
                return <p>{time}</p>
            }
        },
        {
            title: 'Staff',
            dataIndex: 'staff',
            key: 'staff',
            render: function staff(staff : any) {
                return <p>{staff}</p>
            }
        },
        {
            title: 'Service Type',
            dataIndex: 'servicetype',
            key: 'servicetype',
            render: function servicetype(servicetype : any)  {
                return(
                   <span>{servicetype}</span>
                )
            }
        },
        {
            title: 'SP+ Fee',
            dataIndex: 'spfee',
            key: 'spfee',
            render: function customer(spfee : any) {
                return (
                    <>
                        <span className="txt danger">{ spfee }</span>
                    </>
                )
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: function price(price : any) {
                return (
                    <>
                        <span className="txt success">{ price }</span>
                    </>
                )
            }

        },
        {
            title: 'Ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            render: function ratings(ratings : any) {
                return <div className="user-ratings multi">
                    { ratings.map((user_rating : any) => (
                        <div key={user_rating.id}>
                            <Tooltip placement="bottom" title={ user_rating.comment }>
                            <span>{ user_rating.name }</span>
                            <br />
                                <Rate className="mr-10 small" value={ user_rating.rating } />
                            </Tooltip>
                        </div>
                    ))}
                </div> 
            }
        },

    ]

    for(let i = 1; i<4; i++) {
        dataSource.push({
            key: i,
            bookingId: 'SP15912501(R1)',
            spname: {spname : "Halais", service: "Haircut by Machine"},
            address: "Jeddah Nazlah Dist...",
            date: new Date(),
            time: "02:00 PM - 02:30 PM ",
            staff: "Chris J",
            servicetype: 'In-Store',
            spfee: '$2',
            price: '$5',
            ratings: [
                {
                    id: 1,
                    name: 'Ehsaan',
                    rating: 5,
                    comment: 'Great experience with Halais, this is my first order and loved it.'
                },
                {
                    id: 2,
                    name: 'Yours',
                    rating: 5,
                    comment: 'Great experience with Ehsaan, this is my first service and loved it.'
                }
            ]
        })
    }

    return (
        <div>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <div className={cx('picker',  `booking-picker`)}>
                        <RangePicker allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
                    </div>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="medium full-width">Clear Filters</Button>
                </Form.Item>
            </Form>

            <div className="pull-right auto-width txt icon1" style={{ minWidth: '150px' }}>
                <span className="material-icons fz-22 mr-5 lh-22 pull left">picture_in_picture</span>
                <span className="fz-12 lh-22 pull left">Calendar View</span>
                <Switch className="default mt-4 ml-15 pull left" size="small" />
            </div>

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />

            <Modal width="500px" 
                title={ <><strong>Reject booking from ehsaan?</strong><p>ID: SP15912501</p></> }
                visible={isVisible} 
                footer={
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="primary ghost">Cancle</Button>
                        <Button className="danger">Reject Booking</Button>
                    </div>
                }
                onCancel={() => toggleVisibility(false) }>
                    <Input.TextArea rows={4} />
            </Modal>
        </div>
    )
}

export default PastBookings;