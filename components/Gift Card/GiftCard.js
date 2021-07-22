import { Avatar, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const GiftCard = (props) => {
    let onSwitch = event => props.card.visibleToStore = event;
    return (
        <div className="gift-card">
            <div className="gift-card-header">
                <Avatar size={44} icon={<UserOutlined />} />
                <h6>{ props.card.cardName }</h6>
                <span>#{ props.card.cardNumber }</span>
                <span></span>
                <span>
                    Visible In Store
                    <Switch
                        className="ml-15" size="small"
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={ onSwitch }
                        defaultChecked={ props.card.visibleToStore } />
                </span>
            </div>
            <div className="gift-card-description">
                <strong className="full-width">Description</strong>
                <p>{ props.card.description }</p>
            </div>
            <div className="grid-view grid-3 colgap-14 gift-card-validity">
                <div>
                    <strong>Valid For</strong>
                    <p><strong>{ props.card.validity }</strong> After Purchase</p>
                </div>
                <div className="span-2">
                    <strong>Dates</strong>
                    <p>{ props.card.dates }</p>
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
                    <strong>Quantity</strong>
                    <p>{ props.card.quantity }</p>
                </div>
            </div>
            <div className="grid-view grid-3 colgap-14 gift-card-meta">
                <div>
                    <strong  className="primary-txt">{ props.card.purchases }</strong>
                    <p>Purchases</p>
                </div>
                <div>
                    <strong className="primary-txt">{ props.card.timesUsed }</strong>
                    <p>Times Used</p>
                </div>
                <div>
                    <strong className="primary-txt">{ props.card.cardsExpired }</strong>
                    <p>Cards Expired</p>
                </div>

            </div>
            <div className="gift-card-actions">
                <Button className="primary small mr-33" type="link"><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
                <Button className="danger small" type="link"><span className="icon-wrap"><DeleteIcon /></span>Remove Gift Card</Button>
            </div>
        </div>
    )
}

export default GiftCard
