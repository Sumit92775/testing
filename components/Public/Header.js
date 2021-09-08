import useTranslation from 'next-translate/useTranslation';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link'

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
                <Link href="/signup" passHref={true}>
                    <Button className="ant-btn default medium mr-14">{ t('Sign In') }</Button>
                </Link>
                <Link href="/popup" passHref={true}>
                    <Button className="ant-btn primary medium">{ t('Sign Up') }</Button>
                </Link>

            </div>
        </div>
    )
}

export default Header
