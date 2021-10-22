import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, InputNumber } from 'antd';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import styles from '../../styles/components/ShoppingCard.module.scss'
import { deleteFromCart, editCartItem, getItemInCart } from '../../services/items';


const ShoppingItem = (props : any) =>{


    console.log("Props Shopping Item: ", props.setTotalServices);
    

    const [itemObject, setItemObject] = useState({});
    const [services, setServices] = useState([]);

    useEffect(() =>{
        console.log("Props Cart: ",props.itemObject);
        setItemObject(props.itemObject);
        setServices(props.setTotalServices);
    },[]);

    const handleDelete = (itemId: any) =>{
        
        try{
            deleteFromCart(itemId).then(res =>{
                if(res.status){
                    props?.resetUI();

                }else{

                }

            }).catch(error =>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    }

    const handelEditQuantity = (qty: any, index: any) =>{
        // console.log("Quantity Edited: ",qty);
        // console.log("Key Value Array: ",keyValueArray);
        try{

            getItemInCart().then(res =>{
                if(res.status){
                    let cartItemArray = res.data;
                    for (const key in cartItemArray) {
                        if(cartItemArray[key].id === index){
                           
                            let keyValueObjectsArray = cartItemArray[key].CartProperties;
                            let keyArray = [];
                            let valueArray = [];

                            for(let i = 0 ; i < keyValueObjectsArray.length ; i++){
                                keyArray.push(keyValueObjectsArray[i].key)
                                valueArray.push(keyValueObjectsArray[i].value)
                            }

                            editCartItem({
                                qty: qty,
                                id: index,
                                keys: keyArray,
                                value: valueArray
                            }).then(res =>{
                                console.log(res);
                                for (const key in props.setTotalServices) {
                                    if(props.setTotalServices[key].cartId === index){
                                        // let repeatOrder = {};
                                        let repeatOrder = props.setTotalServices[key]; 
                                        let finalServices = new Array();
                                        console.log("Repeat Order1: ",repeatOrder);
                                        
                                        finalServices = services;
                                        let serviceId = repeatOrder.serviceId;
                                        let price = repeatOrder.price;
                                        let cartId = repeatOrder.cartId;
                                        finalServices.push({
                                            "serviceId": serviceId,
                                            "price": price,
                                            "cartId": cartId
                                        });

                                        // setServices(finalServices);
                                        // props.setFinalOrderList();
                                        props.setFinalOrderList(finalServices);
                                        break;
                                    }
                                }


                                // console.log("RepeatOrder: ",repeatOrder);
                                
                            })
                        }
                    }
                }else{
                    console.log(res.status);
                }
            }).catch(error =>{
                console.log(error);
            })

          
        }catch(error){

        }
    }

    return(
        <div className={styles['container']}>
            <div className={styles['left-container']}>
                <Checkbox className="mr-10"><Avatar className="ml-20" size={70}></Avatar></Checkbox>
            </div>
            <div className={styles['right-container']}>
                <div className={styles['sp_container']}>
                    <h6>{props?.itemObject?.Service.primaryServiceName}</h6>
                    <h5 className="fz-23">${props?.itemObject?.Service.price}</h5>
                </div>
                <span className={styles['align']}>by <strong>{props?.itemObject?.Service?.Store?.storeName}</strong></span>
                <div className={styles['q-container']}>
                    
                <InputNumber min={1} max={10} contentEditable={false} defaultValue={props?.itemObject?.qty} />
                {/* <InputNumber min={1} max={10} contentEditable={false} defaultValue={props?.itemObject?.qty} onChange={(event) => {
                    handelEditQuantity(event, props?.itemObject?.id);}} /> */}

                </div>
                <div className={styles['sss-container']}>
                    {props?.itemObject?.CartProperties.map((obj: any) =>{
                       return(
                           <span key={obj}>
                               <span>{obj.key}: <strong>{obj.value}</strong></span>
                           </span>
                       ) 
                    })}
                    <DeleteFilled style={{fontSize : "20px", color : "var(--red-1)"}} onClick={() =>handleDelete(props?.itemObject?.id)}/>
                </div>
                <span className="mt-3">Date &amp; Time: <strong>{props?.itemObject?.addedToCartAt}</strong></span>
                <span className="mt-3 mb-0" onClick={()=>props.modal("Edit Preferences")}><EditFilled></EditFilled>Edit  Preferences</span>
            </div>
        </div>
    )
}

export default ShoppingItem;