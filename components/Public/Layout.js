import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import TopMenubar from './TopMenubar';
import cx from 'classnames';

const Layout = ({children}) => {
    return (
        <div className={styles['main-layout']}>
            <header className={ styles.header }>
                <Header></Header>
                <div className={ cx('top-menubar', styles.menubar) }>
                    <TopMenubar></TopMenubar>
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
