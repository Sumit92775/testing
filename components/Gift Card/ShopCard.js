import { Form, Input,Avatar, Button, Radio } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const ShopCard = (props) => {

    return (
        <div className="gift-card">
            <div className="gift-card-header">
                <Avatar size={44} icon={<UserOutlined />} />
                <div style={{display : "flex", justifyContent : "flex-start", flexDirection : "column"}}>
                    <h6>{ props.card.cardName } <span style={{color : "var(--dark-neutral-3) !important"}}>#{ props.card.cardNumber }</span></h6>
                    <span className="primary-txt">by Halais</span>
                    <span style={{color : "var(--dark-neutral-2)"}}>Fitness Club <span class="material-icons" style={{fontSize : "10px", color : "var(--light-neutral-2)"}}>fiber_manual_record</span> Sports Activity</span>
                </div>
            </div>

            <div className="gift-card-description">
                <strong className="full-width">Description</strong>
                <p>{ props.card.description }</p>
            </div>
            <div className="grid-view grid-2 colgap-14 gift-card-validity">
                <div>
                    <strong>Valid For</strong>
                    <p>{ props.card.validFor }</p>
                </div>
                <div>
                    <strong>Dates</strong>
                    <p>${ props.card.date }</p>
                </div>
            </div>
            <div className="grid-view grid-2 colgap-14 gift-card-pricing">

                <div>
                    <strong>Price</strong>
                    <p>${ props.card.price }</p>
                </div>
                
                <div>
                    <strong>Value</strong>
                    <p>${ props.card.value }</p>
                </div>
            </div>
            <div className="gift-card-actions">
                <Button className="primary">Buy Now</Button>
            </div>

        </div>
    )
}

export default ShopCard;
