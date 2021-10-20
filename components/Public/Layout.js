import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import TopMenubar from './TopMenubar';
import cx from 'classnames';
import Cookies from 'universal-cookie';
import Headeruser from '../User/Header';
import HomeHeader from './HomeHeader'
import { useEffect, useState } from 'react';
import { getNotifications } from '../../services/notification';
const cookies = new Cookies();

const Layout = ({children}) => {

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    {/* <Headeruser notificationCount={notificationCount} setNotificationCountFunction={setNotificationCountFunction}></Headeruser> */}

    // const setNotificationCountFunction = () =>{
    //     setNotificationCount(data.notificationCount)
    // }
    


    // console.log(data);

    return (
        <div className={styles['main-layout']}>
            <header className={ styles.header }>
                {/* {
                    cookies.get('accessToken') ? 
                   <HomeHeader type="home" notificationCount={data.notificationCount} cartItemCount={data.cartItemCount} setNotificationCountFunction={setNotificationCountFunction}></HomeHeader>
                    :  */}
                    <Header></Header>
                    {/* }    */}

                <div className={ cx('top-menubar', styles.menubar) }>
                    <TopMenubar ></TopMenubar>
                </div>
            </header>
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

export default Layout
