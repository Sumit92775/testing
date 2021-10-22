import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import ShoppingItem from './shopping-item';

const ShoppingCard = (props : any) =>{

    const [productDetailDataObj, setProductDetailDataObj ] = useState([]);

    useEffect(() =>{
        console.log("Props: ",props?.setCartItemList);
        
        setProductDetailDataObj(props?.setCartItemList); 
    },[])


    return(
        <div>
            <div className="card card2 pt-0 pl-0 mb-37">
                <h4 className="ml-32 mt-20">Shoping Cart</h4>
                <div>
                    {props?.setCartItemList.map((obj: any) =>{
                        return(
                            <div key={`${obj.id}`}>
                                <ShoppingItem modal={props?.modal} itemObject={obj} resetUI={props?.resetUI} setCartItemList={props?.setCartItemList} setTotalServices={props?.setTotalServices} setFinalOrderList={props?.setFinalOrderList}></ShoppingItem>
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