import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../actions/user';
import { useRouter } from 'next/router';


const Header = (props) => {
    let getPath = (path) => {
        return process.env.base_url + path;
    },
    dispatch = useDispatch(),
    router = useRouter();

    
    return useSelector((state) => {
        let auth_buttons = <>
            <Link href={ getPath("login") } passHref={true}>
                <Button className="ant-btn default medium mr-14">Sign In</Button>
            </Link>
            <Link href={ getPath("signup") } passHref={true}>
                <Button className="ant-btn primary medium">Join</Button>
            </Link>
        </>

        const logout = () => {
            dispatch(authenticate(false));
            router.push( process.env.base_url );
        }

        if(state.user.authenticated) {
            auth_buttons = <Button className="ant-btn primary medium" onClick={ logout }>Logout</Button>;
        }

        return (
            <div className={styles.head}>
                <div className="relative">
                    <Link className={styles.logo} href={ getPath('') } passHref={true}>
                        {/* <span>test</span> */}
                        <Image layout="fill" src="/full-logo.svg" alt="logo" />
                    </Link>
                </div>
                <div></div>
                <div>
                    <Link href={ getPath('') } passHref={true}>
                        <span className="primary-txt mr-22">Provider Subscription Tiers</span>
                    </Link>
                    <Avatar className="mr-8" size={22} icon={<UserOutlined />} />
                    <span>Arabic</span>
                </div>
                <div className="header-actions">
                    { auth_buttons }
                </div>
            </div>
        )
    });
}

export default Header
