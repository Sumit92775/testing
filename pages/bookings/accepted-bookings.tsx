import React, {useState} from 'react';
import { Table, Button, Select, Menu, Switch, Form, Modal, Input, DatePicker, Rate } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import {LocationCity} from '@material-ui/icons'

import cx from 'classnames';

const AcceptedBookings = () => {
    const [modal, setModal] = useState(false);
    const [recheduleModal, setRecheduleModal] = useState(false);
    const [modalName, setModalName] = useState("");
    // const [cancelBookingModal, setRecheduleModal] = useState(false);
    
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
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
            render: function service(service : any)  {
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
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action() {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="Accept" className="txt dark1" onClick={() =>openModal("Rechedule")} icon={<span className="material-icons">done</span>}>Rechudule</Menu.Item>
                            <Menu.Item key="Reject" className="txt danger" onClick={ () => openModal("Reason") } icon={<span className="material-icons">cancel</span>}>Cancel Bookings</Menu.Item>
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
            service: {service : "Haircut By Machine", by: "By Chris J"},
            servicetype: 'In-Store',
            spfee: '$2',
            price: '$5',
        })
    }

     
    const openModal = (type :any) => {
        setModal(true);
        setModalName(type);

    };


    const handleCancel = () => {
        setModal(false);
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
                title={ modalName === "Rechedule" ?<><h3 className="txt primary">Rechedule</h3></> : <><p className="mb-10"><strong className="txt primary fz-30">Reason</strong></p><strong>Reject booking from ehsaan?</strong><p>ID: SP15912501</p></> }
                footer={modalName === "Rechedule" ? 
                <>
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="">Cancle</Button>
                        <Button className="txt primary">Confirm</Button>
                    </div>
                </> 
                :
                    <div style={{ paddingBlock: '18px' }}>
                        <Button className="primary ghost">Cancle</Button>
                        <Button className="danger">Reject Booking</Button>
                    </div>
                } visible={modal} onCancel={handleCancel}>
                    {modalName === "Rechedule" ? 
                     <RangePicker style={{width : "250px", height : "43px"}}/>
                    :
                    <Input.TextArea rows={4} />
                    }
            </Modal>
        </div>
    )
}

export default AcceptedBookings;