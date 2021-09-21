import React, {useState} from 'react';
import { Table, Button, Select, Menu, Switch, Form, Modal, Input, DatePicker, Rate } from 'antd';
import moment from 'moment';
// import MapView from './MapView';
const { Option } = Select;
const { RangePicker } = DatePicker;

import {LocationCity} from '@material-ui/icons'

import cx from 'classnames';

const YourRecheduleRequests = () => {
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
            render: function spname(spname) {
                return (
                    <>
                        <strong>{ spname }</strong>
                    </>
                )
            }
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: function address(address) {
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
            render: function date(date) {
                return <p>{ moment(date).format(`${process.env.date_format}`)}</p>
            }
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: function time(time) {
                return <p>{time}</p>
            }
        },
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
            render: function service(service)  {
                return(
                    <div>
                        <span>{service.service}</span><br/>
                        <span className="fz-12">{service.by}</span>
                    </div>
                )
            }
        },
        {
            title: 'Service Type',
            dataIndex: 'servicetype',
            key: 'servicetype',
            render: function servicetype(servicetype)  {
                return(
                   <span>{servicetype}</span>
                )
            }
        },
        {
            title: 'New Date',
            dataIndex: 'newdate',
            key: 'newdate',
            render: function newdate(newdate) {
                return <p>{ moment(newdate).format(`${process.env.date_format}`)}</p>
            }
        },
        {
            title: 'New Time',
            dataIndex: 'newtime',
            key: 'newtime',
            render: function newtime(newtime) {
                return <p>{newtime}</p>
            }
        },
        
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action() {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="Reject" className="txt danger" icon={<span className="material-icons">cancel</span>}>Cancel</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ]

    for(let i = 1; i<4; i++) {
        dataSource.push({
            key: i,
            bookingId: 'SP15912501(R1)',
            spname: 'Halais',
            address: "Jeddah Nazlah Dist...",
            date: new Date(),
            time: "02:00 PM - 02:30 PM ",
            newdate: new Date(),
            newtime: "02:00 PM - 02:30 PM ",
            service: {service : "Haircut By Machine", by: "By Chris J"},
            servicetype: 'In-Store',
        })
    }

    return (
        <div>
            <h5 className="mb-25">Your Reschedule Requests</h5>
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

export default YourRecheduleRequests;