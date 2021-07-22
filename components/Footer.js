import { Menu } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Switch } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import Image from 'next/image'
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
            <span><a href="#" target="_blank">Terms of Services,</a> <a href="#" target="_blank">Privacy Policy</a></span>
            <span></span>
            <div className="footer-actions">
                <span className="language">
                    <Menu mode="horizontal">
                        <SubMenu key="SubMenu" icon={<LanguageIcon />} title="English">
                            <Menu.Item key="setting-1">Language 1</Menu.Item>
                            <Menu.Item key="setting-2">Language 2</Menu.Item>
                            <Menu.Item key="setting-3">Language 3</Menu.Item>
                            <Menu.Item key="setting-4">Language 4</Menu.Item>
                            <Menu.Item key="setting-5">Language 5</Menu.Item>
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
