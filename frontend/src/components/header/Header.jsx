import styles from './Header.module.css'
import BellIcon from '../../assets/bell.svg?react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation();
    const currentPath = location.pathname.split('/').filter((x) => x);

    function breadCrumbs() {
        if (currentPath.length === 0) {
            return 'ACERVO';
        }

        return (
            <nav className={styles.breadcrumbs}>
                <Link to="/">Acervo</Link>
                {currentPath.map((value, index) => {
                    const path = `/${currentPath.slice(0, index + 1).join('/')}`;
                    const isLast = index === currentPath.length - 1;
                    const displayValue = value.charAt(0).toUpperCase() + value.slice(1);

                    return (
                        <span key={path}>
                            <span className={styles.separator}> &gt; </span>
                            {isLast ? (
                                <span className={styles.current}>{displayValue}</span>
                            ) : (
                                <Link to={path}>{displayValue}</Link>
                            )}
                        </span>
                    )
                }
                )}
            </nav>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                {breadCrumbs()}
            </div>
            <div className={styles.notification}>
                <BellIcon className={styles.bellIcon} />
            </div>
        </header>
    )
}

export default Header;