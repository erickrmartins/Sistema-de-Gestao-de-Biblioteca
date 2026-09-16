import styles from './SideBar.module.css';
import BooksIcon from '../../assets/books.svg?react';
import ConfigIcon from '../../assets/config.svg?react';
import LogoutIcon from '../../assets/logout.svg?react';
import ProfileIcon from '../../assets/profile.svg?react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const locationName = location.pathname.split('/').filter((x) => x);

    function isSelected(local) {
        if (locationName[0] === local) {
            return true;
        }

        return false;
    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.profile}>
                    
                </div>

                <div className={styles.navigation}>
                    <div className={styles.navItem}>
                        <button
                            className={isSelected("acervo") ? styles.selected : ''}

                            onClick={() => navigate('/acervo')}
                        >
                            <BooksIcon className={styles.icon} />
                            Acervo</button>
                    </div>
                    <div className={styles.navItem}>
                        <button
                            className={isSelected("perfil") ? styles.selected : ''}
                            onClick={() => navigate('/perfil')}
                        >
                            <ProfileIcon className={styles.icon} />
                            Perfil</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.navItem}>
                    <button
                        className={isSelected("config") ? styles.selected : ''}
                        onClick={() => navigate('/config')}
                    >
                        <ConfigIcon className={styles.icon} />
                        Configurações</button>
                </div>
                <div className={styles.navItem}>
                    <button
                        className={isSelected("login") ? styles.selected : ''}
                        onClick={() => navigate('/login')}
                    >
                        <LogoutIcon className={styles.icon} />
                        Sair</button>
                </div>
            </div>
        </aside>
    )
}

export default SideBar;