import { Menu } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import Image from 'next/image'
import Link from 'next/link';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const { SubMenu } = Menu;

const Footer = () => {
    return (
        <div className="main-footer">
            <Image width={146} height={22} src="/full-logo.svg" alt="logo" />
            <span>
                <span className="mr-20">CR # 1010459300</span>
                <span>TAX # 3102339727</span>
            </span>
            <span><a href="/terms-and-conditions" target="_blank">Terms of Services,</a> <a href="/privacy-policy" target="_blank">Privacy Policy</a></span>
            <span></span>
            <div className="footer-actions">
                <span className="language">
                    <Menu mode="horizontal">
                        <SubMenu key="SubMenu" icon={<LanguageIcon />} title="English">
                            <Menu.Item key="setting-1"><Link href="/" locale="en">English</Link></Menu.Item>
                            <Menu.Item key="setting-2"><Link href="/" locale="ar">Arabic</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                    {/* <LanguageIcon />
                    English */}
                </span>
                <span className="social-media">
                    <a href="#" target="_blank"><FacebookIcon /></a>
                    <a href="#" target="_blank"><TwitterIcon /></a>
                    <a href="#" target="_blank"><YouTubeIcon /></a>
                    <a href="#" target="_blank"><LinkedInIcon /></a>
                </span>
            </div>
        </div>
    )
}

export default Footer
