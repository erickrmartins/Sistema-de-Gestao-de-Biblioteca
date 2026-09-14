import styles from './Main.module.css';
import Header from '../../components/header/Header.jsx';
import Sidebar from '../../components/sidebar/SideBar.jsx';

function Main() {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <Sidebar />
            </aside>
            <header className={styles.header}>
                <Header />
            </header>
            
        </div>
    )
}

export default Main;