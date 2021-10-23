import LeftSidebar from '../SidebarMenu'
import Header from '../User/Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from '../User/Layout.module.scss';
import HomeHeader from '../Public/HomeHeader';
import { useEffect, useState } from 'react';
import { getNotifications } from '../../services/notification';
import { getCartStatus } from '../../services/header';
import { getStoreByLocation } from '../../services/home';
import { message } from 'antd';

const CustomerLayout = ({children}) => {
    const menuItems = [
        {
            path: '/bookings',
            label: 'My Bookings',
            icon: 'shopping_basket'
        },
        {
            path: '/reviews',
            label: 'My Reviews',
            icon: 'stars'
        },
        {
            path: '/payments/wallet',
            label: 'My Wallets',
            icon: 'monetization_on'
        },
        {
            path: '/gift-cards',
            label: 'Gift Cards',
            icon: 'card_giftcard'
        },
        {
            path: '/profile',
            label: 'Settings',
            icon: 'settings'
        },
    ]

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    // useEffect(() =>{

    //     try{
    //         getNotifications(1).then(res =>{
    //             if(res.status === 404){
    //               setNotificationCount(0);
    //             }else{
    //               setNotificationCount(res?.newNotifications);
    //             }
    //         }).catch(error =>{
    //             console.log(error);
    //         })
    
    //       getCartStatus().then(res =>{
    //         if(res.status === 404){
    //           setCartItemCount(0);
    //           console.log("ResponseCart: ",res);
    //         }else{
    //           console.log("Cart Count: ",res.data[0].cartCount);
    //           setCartItemCount(res.data[0].cartCount)
    //         }
    //       })
    
    //     }catch(error){
    //       console.log(error);
    //       message.error(error);
    //     }

    // },[])

    return (
        <div className={styles['main-layout']}>
            <LeftSidebar menu_items={menuItems}></LeftSidebar>
            <Header></Header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}

export default CustomerLayout
