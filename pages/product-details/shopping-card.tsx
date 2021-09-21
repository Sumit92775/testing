import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import ShoppingItem from './shopping-item';

const ShoppingCard = (props : any) =>{

    const [productDetailDataObj, setProductDetailDataObj ] = useState([{hello :"hello", len : 1},{hello :"hye", len : 2},{bye : 'bye', len : 3}]);
    return(
        <div>
            <div className="card card2 pt-0 pl-0 mb-37">
                <h4 className="ml-32 mt-20">Shoping Cart</h4>
                <div>
                    {productDetailDataObj.map((obj) =>{
                        return(
                            <div key={`${obj}`}>
                                <ShoppingItem modal={props.modal}></ShoppingItem>
                                {obj.len === productDetailDataObj.length ? 
                                <>
                                </>
                                :
                                <Divider className="mb-0"></Divider>
                                }
                            </div>
                        )
                    })}
                </div>    
            </div>
            
            <Button style={{height : "60px"}} className="full-width mr-0 center-content"><span className="material-icons mr-5">add_circle_outline</span>Add Another Service</Button>
        </div>
    )
}

export default ShoppingCard;