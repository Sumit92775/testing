import LeftSidebar from './LeftSidebar'
import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';

const Layout = ({children, base_url}) => {
    return (
        <div className={styles['main-layout']}>
            <LeftSidebar></LeftSidebar>
            {/* <div className="left-sidebar"></div> */}
            <Header base_url={base_url}></Header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
        // <Layout>
        //     <LeftSidebar />
        //     <Layout>
        //         <MainHeader />
        //         <Content style={{ margin: '24px 16px 0' }}>
        //             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        //                 {children}
        //             </div>
        //         </Content>
        //         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        //     </Layout>
        // </Layout>
    )
}

export default Layout
