import React from "react";
const CancelBookingsModal = (props: any) =>{
    return(
        <div>
            <p> <strong>You paid <span className="txt success">107</span>{/* {props?.paidAmount} */} for booking SP+202100-1/7/1 {/* {props?.booking} */} to hackr444ish999{/* {props.storeName} */}.
                Total Refundable Amount as per their Policies is: <span className="txt danger"> 107</span>{/* {props?.refundAmount} */}.
                <br/>
                Are you sure you want to cancel the booking?</strong></p>
        </div>
    )
}
export default CancelBookingsModal;