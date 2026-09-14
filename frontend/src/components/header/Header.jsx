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
                {currentPath.map((value, index) => {
                    const path = `/${currentPath.slice(0, index + 1).join('/')}`;
                    const isLast = index === currentPath.length - 1;
                    const displayValue = value.charAt(0).toUpperCase() + value.slice(1);

                    return (
                        <span key={path}>
                            <Link to={path}>{displayValue.toUpperCase()}</Link>
                            
                            {isLast ? '' : (
                                <span className={styles.separator}> &gt; </span>
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