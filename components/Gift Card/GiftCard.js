import { Avatar, Modal, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import ShareGiftCardModal from './ShareGiftCardModal'

const GiftCard = (props) => {
    let onSwitch = event => props.card.visibleToStore = event;
    
    const [shareGiftCard, setShareGiftCard] = useState(false);
    // const [chooseModalName, setchooseModalName] = useState("");

    const handleOk = (evt) => {
        console.log('ok clicked', evt)
    };
    
    const handleCancel = () => {
        setShareGiftCard(false)
    };
    
    const openModal = (type) => {
        setShareGiftCard(true)
    };

    
    return (
        <div className="gift-card">
            <div className="gift-card-header">
                <Avatar size={44} icon={<UserOutlined />} />
                <h6>{ props.card.cardName }</h6>
                <span>#{ props.card.cardNumber }</span>
                <span></span>
                {/* <span>
                    Visible In Store
                    <Switch
                        className="ml-15" size="small"
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={ onSwitch }
                        defaultChecked={ props.card.visibleToStore } />
                </span> */}
            </div>
            <div className="gift-card-description">
                <strong className="full-width">Description</strong>
                <p>{ props.card.description }</p>
            </div>
            <div className="grid-view grid-3 colgap-14 gift-card-validity">
                <div>
                    <strong>Expiry</strong>
                    <p className="primary-txt">{ props.card.expiry }</p>
                </div>
            </div>
            <div className="grid-view grid-3 colgap-14 gift-card-pricing">
                <div>
                    <strong>Price</strong>
                    <p>${ props.card.price }</p>
                </div>
                <div>
                    <strong>Value</strong>
                    <p>${ props.card.value }</p>
                </div>
                <div>
                    <strong>Service Provider</strong>
                    <p className="primary-txt">{ props.card.serviceProvider }</p>
                </div>
            </div>
            <div className="grid-view grid-3 colgap-14 gift-card-meta">
                <div>
                    <strong  className="primary-txt">${ props.card.balance }</strong>
                    <p>In Balance</p>
                </div>
            </div>
            <div className="gift-card-actions">
                <Button className="primary small mr-33" type="link" onClick={openModal}><span className="icon-wrap"><EditIcon /></span>Share Gift Card</Button>
            </div>

            <Modal style={{borderRadius :"15px", overflow : "hidden"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="primary-txt">Share Gift Card</h4>
                            </div>
                    } footer={""} 
                    visible={shareGiftCard} onOk={handleOk} onCancel={handleCancel}>
                        {
                           <ShareGiftCardModal/>
                        }
                    </Modal>
        </div>
    )
}

export default GiftCard
