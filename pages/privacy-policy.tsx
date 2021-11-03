import React, { useEffect, useState } from 'react'
import PublicLayout from '../components/Public/Layout';
import Image from 'next/image';
import { Collapse, Card } from 'antd';
import styles from '../styles/components/Terms-And-Conditions.module.scss';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';

const PrivacyPolicy = () => {

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() =>{
        try{
            console.log("CHECK");
            
            getNotifications(1).then(res =>{
                if(res.status === 404 || res.status === 403 || res.status == false){
                    setNotificationCount(0);
                }else{
                    setNotificationCount(res?.newNotifications);
                }
            }).catch(error =>{
                console.log(error);
            })

            getCartStatus().then(res =>{
                if(res.status == false || res.status == 404 || res.status == 403){
                    setCartItemCount(0);
                    console.log("ResponseCart: ",res);
                }else{
                    if(res.data){
                        console.log("Cart Count: ",res.data[0]);
                        setCartItemCount(res.data[0].cartCount);
                    }else{
    
                    }
                }
            })

        }catch(error: any){
            console.log(error);
        }
    },[]);

    const privacyPolicy = [
        {
            ques: 'Privacy policy one',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Privacy policy two',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Privacy policy three',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Privacy policy four',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Privacy policy five',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Privacy policy six',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        }
    ]
    return (
        <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
                <section className="banner home">
                    <Image layout="fill" src="/slider 1.jpg" alt="" />
                    <div className={styles['about-us-text-container']}>
                    <h1 className={styles['about-us-text']}>Privacy Policy</h1>
                    </div>
                </section>
    
                <section className="p-35" style={{backgroundColor : 'var(--page-bg)'}}>
                    <Card className={styles['terms-and-conditions-container']}>
                        <h4 className="pl-15 mb-40">Privacy Policies</h4>
                        <Collapse className="faqs" defaultActiveKey={['0']} ghost>
                            { privacyPolicy.map((policy, i) => (
                                <Collapse.Panel header={ <h6>{ policy.ques }</h6> } key={ i }>
                                <p>{ policy.ans }</p>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                    </Card>
                </section>
                
                
            </PublicLayout>
    )
}

export default PrivacyPolicy;