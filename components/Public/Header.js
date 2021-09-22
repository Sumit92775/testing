import useTranslation from 'next-translate/useTranslation';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu } from 'antd';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link'
const { SubMenu } = Menu;

const Header = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.head}>
            <div className="relative">
                <Link className={styles.logo} href={ process.env.base_url } passHref={true}>
                    <Image layout="fill" src="/full-logo.svg" alt="logo" />
                </Link>
            </div>
            <div></div>
            <div>
                <Link href="/sponsoredpromotions" passHref={true}>
                    <span className="primary-txt mr-22">{ t('Provider Subscription Tiers') }</span>
                </Link>
                <Avatar className="mr-8" size={22} icon={<UserOutlined />} />
                <span>Arabic</span>
            </div>
            <div className="header-actions">
                <Link href="/login" passHref={true}>
                    <Button className="ant-btn default medium mr-14">{ t('Sign In') }</Button>
                </Link>
                <Link href="/signup" passHref={true}>
                    <Button className="ant-btn primary medium">{ t('Sign Up') }</Button>
                </Link>
                {/* <div>
                    <Menu mode="horizontal" className="user-actions transparent-bg">
                        <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
                            <Menu.Item key="setting-1">
                                <Link href={ process.env.base_url + "login" } passHref={true}>
                                    My Bookings
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="giftcard-1">
                                <Link href={ process.env.base_url + "reviews" } passHref={true}>
                                    My Reviews
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting-1">
                                <Link href={"payments/wallet" } passHref={true}>
                                    My Wallets
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting-1">
                                <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                    Gift Cards
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="giftcard-1">
                                <Link href={ process.env.base_url + "" } passHref={true}>
                                    Logout
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div> */}

            </div>
        </div>
    )
}

export default Header
