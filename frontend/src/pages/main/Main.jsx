import styles from './Main.module.css';
import Header from '../../components/header/Header.jsx';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className={styles.container}>
            {/*
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            */}

            <div className={styles.mainContainer}>
                <header className={styles.header}>
                    <Header />
                </header>
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default Main;