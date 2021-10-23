import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import ShoppingItem from './shopping-item';

const ShoppingCard = (props : any) =>{

    const [productDetailDataObj, setProductDetailDataObj ] = useState([]);

    useEffect(() =>{
        console.log("Props: ",props.serviceArray);
        setProductDetailDataObj(props.setCartItemList); 
    },[])

    const setUpdatedService = (itemId: any, qty: any) =>{
        // console.log("Shopping Card: ",updatedServices);
        props.setFinalList(itemId, qty);
        props.resetUI();
    }

    return(
        <div>
            <div className="card card2 pt-0 pl-0 mb-37">
                <h4 className="ml-32 mt-20">Shoping Cart</h4>
                <div>
                    {props?.setCartItemList.map((obj: any) =>{
                        return(
                            <div key={`${obj.id}`}>
                                <ShoppingItem modal={props.modal} resetUI={props.resetUI} setUpdatedService={setUpdatedService} itemObject={obj}></ShoppingItem>
                                {obj?.id === productDetailDataObj.length ? 
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