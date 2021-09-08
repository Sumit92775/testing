import {Divider, Form, Switch} from 'antd';
import React from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card1.module.scss'
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';

const Card1 = (props : any) =>{

    function onChange(checked : any) {
        console.log(`switch to ${checked}`);
    }

    const openModal = (type : any) =>{
        props.modal(type);
        props.title("General details");
    }

    return(
        <CardTemplate title={"General Details"} modal={openModal}>
            <div className={styles['main-content-container']}>
                <div>
                    <strong>Store</strong>
                    <span>Halais</span>
                </div>
              
                <Divider className="mt-14 mb-10"></Divider>
                <div>
                    <strong>Username</strong>
                    <span>@Halais123</span>
                </div>
               
                <Divider className="mt-14 mb-10"></Divider>
                <div className={styles['grid-container']}>
                    <div>
                        <strong>Email</strong>
                        <span>Halais123@gmail.com</span>
                    </div>
                    <div className={styles['switch-container']}>
                        <span className={styles['clickable']} style={{color : "var(--primary-1)"}} onClick={()=>openModal("Email")}>Change Email</span>
                    </div>
                </div>
                
                <Divider className="mt-14 mb-10"></Divider>
                <div className={styles['grid-container']}>
                    <div>
                        <strong>Store Mobile Number</strong>
                        <span>+966-505-5515-86</span>
                    </div>
                    <div className={styles['switch-container']}>
                        <span className={styles['clickable']} style={{color : "var(--primary-1)"}} onClick={()=>openModal("Mobile Number")}>Change Mobile Number</span>
                    </div>
                </div>

                <Divider className="mt-14 mb-10"></Divider>
                <div>
                    <strong>Store Landline Number</strong>
                    <span>+966-505-5515-86</span>
                </div>

                <Divider className="mt-14 mb-10"></Divider>
                <div>
                    <strong>Store Hours</strong>
                    <span>08:010am - 10:00 pm (Mon-Sun)</span>
                </div>
                
                <Divider className="mt-14 mb-10"></Divider>
                <div>
                    <strong>Social Media</strong>
                    <div className={styles['social-media-icon-container']}>
                        <FacebookFilled style={{marginInlineEnd : "7px"}}/>
                        <TwitterCircleFilled style={{marginInlineEnd : "7px"}}/>
                        <LinkedinFilled style={{marginInlineEnd : "7px"}}/>
                    </div>
                </div>

                {/* <Divider className="mt-14 mb-10"></Divider>
                <div className={styles['grid-container']}>
                    <div>
                        <strong>Store Manager Name</strong>
                        <span>Jonathan</span>
                    </div>
                    <div className={styles['switch-container']}>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                </div>
               
                <Divider className="mt-14 mb-10"></Divider>
                <div className={styles['grid-container']}>
                    <div>
                        <strong>Store Manager Mobile</strong>
                        <span>+966-505-5515-87</span>
                    </div>
                    <div className={styles['switch-container']}>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                </div>
                
                <Divider className="mt-14 mb-10"></Divider>
                <div className={styles['grid-container']}>
                    <div>
                        <strong>About Store</strong>
                        <span>Halis is a traditional restaurant.</span>
                    </div>
                    <div className={styles['switch-container']}>
                        <Switch style={{width : "32px"}} defaultChecked onChange={onChange} />
                    </div>
                </div>
 */}

            </div>
        </CardTemplate>
    )
}
export default Card1;