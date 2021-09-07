import { Avatar, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ExpiredGiftCards = (props) => {
    // let onSwitch = event => props.card.visibleToStore = event;
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
            {/* <div className="grid-view grid-3 colgap-14 gift-card-validity">
                <div>
                    <strong>Expiry</strong>
                    <p className="primary-txt">{ props.card.expiry }</p>
                </div>
            </div> */}
            <div className="grid-view grid-4 colgap-14 gift-card-pricing">
                
                <div>
                    <strong>Expiry</strong>
                    <p className="primary-txt">{ props.card.expiry }</p>
                </div>

                <div>
                    <strong>Price</strong>
                    <p>${ props.card.price }</p>
                </div>
                <div>
                    <strong>Remaining Balance</strong>
                    <p>${ props.card.remainingBalance }</p>
                </div>
                <div>
                    <strong>Store Name</strong>
                    <p className="primary-txt">{ props.card.storeName }</p>
                </div>
            </div>
        </div>
    )
}

export default ExpiredGiftCards;
