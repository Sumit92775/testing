import { Badge, Input,Layout } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Switch, Dropdown, Menu } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from "@material-ui/icons"
import SettingsIcon from '@material-ui/icons/Settings';
import Link from "next/link";
const { SubMenu } = Menu;
import styles from '../Public/Header.module.scss';
import Image from 'next/image';

import { getNotifications } from '../../services/notification';
// import { getStoreByLocation } from '../../services/home';
import { getCartStatus } from '../../services/header';
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = () => {

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);
  
    
    
    useEffect( () =>{
        if(cookies.get('accessToken')){
            try{
                getNotifications(1).then(res =>{
                    if(res.status === 404){
                      setNotificationCount(0);
                    }else{
                      setNotificationCount(res?.newNotifications);
                      
                    }
                }).catch(error =>{
                    console.log(error);
                })
              getCartStatus().then(res =>{
                if(res.status === 404 || res.status === 403 || res.status === 404){
                  setCartItemCount(0);
                  console.log("ResponseCart: ",res);
                }else{
                  console.log("Cart Count: ",res.data[0].cartCount);
                  setCartItemCount(res.data[0].cartCount)
                }
              })
        
            }catch(error){
              console.log(error);
              message.error(error);
            }
        }else{
    
        }
  
   },[])


    return (
        <header className="user-header">
           
           {/* <div className="grid-view grid-4" style={{gridTemplateColumns: "250px 1200px auto auto"}}> */}
                {/* <div className="relative" style={{width :"250px"}}>
                    <Link className={styles.logo} href={ process.env.base_url } passHref={true}>
                        <Image layout="fill" src="/full-logo.svg" alt="logo" />
                    </Link>
                </div> */}
                <Input className="header-search ml-50" size="small" placeholder="Search" prefix={<SearchOutlined />} />
            
                <div className="heder-actions pull right">
                    <div></div>
                    <div>
                        <Avatar className="mr-8" size={22} icon={<UserOutlined />} />
                        <span>Arabic</span>
                        </div>
                    <Badge className="mt-5" count={notificationCount}>
                        <Link href="/notifications" passHref={true}>
                            <span className="cursor"><NotificationsIcon /></span>
                        </Link>
                    </Badge>
                    <Badge className="mt-5" count={cartItemCount}>
                        <Link href="/product-details" passHref={true}>
                            <span className="cursor"><ShoppingCart/></span>
                        </Link>
                    </Badge>
                    <Link href="/profile" passHref={true}>
                        <span className="cursor"><SettingsIcon /></span>   
                    </Link>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
                            <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "bookings" } passHref={true}>
                                        My Bookings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1">
                                    <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                        My Reviews
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "payments" } passHref={true}>
                                        My Wallets
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                        Gift Cards
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1" onClick={() => {
                                    console.log("Logout Call!!");
                                    cookies.remove('accessToken');
                                    }}>
                                    <Link href={ process.env.base_url + "login" } passHref={true}>
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>

                </div>
           {/* </div> */}

        </header>
    )
}

export default Header;

