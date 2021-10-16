import LeftSidebar from '../SidebarMenu'
import Header from '../User/Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from '../User/Layout.module.scss';

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
