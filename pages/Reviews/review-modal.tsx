import Avatar from 'antd/lib/avatar/avatar';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const ReviewModal = (props:any) =>{
    // console.log(props.modalContent);

    return(
        <div className="container flex" style={{flexDirection : "column"}}>
            
            <div className="left-container flex">

                <div style={{width : "fit-content"}}>
                    <Avatar size={60}></Avatar>
                </div>

                <div className="ml-10" style={{display : "flex", flexDirection : "column"}}>
                    <h5>{props?.username}</h5>
                    <span>{props?.service}</span>
                    <span className="mb-10 fz-11">02 Sep, 2021 06:58 PM Booking ID SP15912502</span>
                </div>
            </div>

                <h6 className="txt dark2 mb-5 mt-10">Review</h6>
                <TextArea cols={7} style={{height : "85px"}}></TextArea>
                <span>{props?.time}</span>
        </div>
    )
}

export default ReviewModal;
