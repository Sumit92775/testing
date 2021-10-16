import { Badge, Input,Layout } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Switch, Dropdown, Menu } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from "@material-ui/icons"
import SettingsIcon from '@material-ui/icons/Settings';
import Link from "next/link";
const { SubMenu } = Menu;

const Header = (props) => {
    return (
        <header className="user-header">
            <Input className="header-search" size="small" placeholder="Search" prefix={<SearchOutlined />} />
            <div className="heder-actions">
                <div></div>
                <div>
                    <Avatar className="mr-8" size={22} icon={<UserOutlined />} />
                    <span>Arabic</span>
                    </div>
                <Badge className="mt-5" count={5}>
                    <span className="cursor"><NotificationsIcon /></span>
                </Badge>
                <Badge className="mt-5" count={5}>
                    {/* <Avatar shape="square" size="large" />     */}
                    <Link href="/product-details" passHref={true}>
                        {/* <span><NotificationsIcon /></span> */}
                        <span className="cursor"><ShoppingCart/></span>
                    </Link>
                </Badge>
                <span><SettingsIcon /></span>   
                    <Menu mode="horizontal" className="user-actions transparent-bg">
                        <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
                            <Menu.Item key="setting-1">
                                <Link href={ process.env.base_url + "login" } passHref={true}>
                                    My Bookings
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="giftcard-1">
                                <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                    My Reviews
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting-1">
                                <Link href={ process.env.base_url + "login" } passHref={true}>
                                    My Wallets
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting-1">
                                <Link href={ process.env.base_url + "login" } passHref={true}>
                                    Gift Cards
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="giftcard-1">
                                <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                    Logout
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>

            </div>
        </header>
    )
}

export default Header;

