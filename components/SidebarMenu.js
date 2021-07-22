import { Layout, Menu } from "antd";
import Image from 'next/image'
import { useRouter } from 'next/router';

const { Sider } = Layout;

const LeftSidebar = (props) => {
    const router = useRouter();
    const handleClick = (e) => router.push(e.key);

    return (
        <div className="left-sidebar">
            <div className="logo">
                <Image width={174} height={30} src="/full-logo.svg" alt="logo" />
            </div>
            <Menu mode="inline" defaultSelectedKeys={router.pathname}>
                {
                    props.menu_items.map((menu, i) => <Menu.Item key={menu.path} onClick={handleClick} icon={ menu.icon ? <span className="material-icons fz-20">{ menu.icon }</span> : null}>{ menu.label }</Menu.Item>)
                }
            </Menu>
        </div>
    )
}

export default LeftSidebar
