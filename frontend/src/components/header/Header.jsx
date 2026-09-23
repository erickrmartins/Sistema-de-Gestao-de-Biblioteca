import styles from './Header.module.css'
import BellIcon from '../../assets/bell.svg?react'
import ConfigIcon from '../../assets/config.svg?react'
import { Link, useLocation } from 'react-router-dom'
import ProfileCard from '../profile-card/ProfileCard.jsx'
import { DataProfile } from '../../fake-data/DataProfile.jsx'

function Header() {
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];
    const profile = DataProfile();

    function isWorker() {
        let result;

        if (profile.role === 'Leitor') {
            result = false;
        } else {
            result = true;
        }

        return result;
    }

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li className={currentPath === 'acervo' ? styles.active : ''}><Link className={styles.item} to='/acervo'>Acervo</Link></li>
                    <li className={currentPath === 'perfil' ? styles.active : ''}><Link className={styles.item} to='/perfil'>Perfil</Link></li>
                    <li className={`${currentPath === 'registra' ? styles.active : ''} ${isWorker() ? styles.worker : styles.notWorker}`}><Link className={styles.item} to='/registra'>Registrar</Link></li>
                    <li className={`${currentPath === 'gerencia' ? styles.active : ''} ${isWorker() ? styles.worker : styles.notWorker}`}><Link className={styles.item} to='/gerencia'>Gerenciar</Link></li>
                </ul>
            </nav>
            <div className={styles.icons}>
                <Link to='/notifi'><BellIcon className={`${styles.icon} ${currentPath === 'notifi' ? styles.activeIcon : undefined}`} /></Link>
                <Link to='/config'><ConfigIcon className={`${styles.icon} ${currentPath === 'config' ? styles.activeIcon : undefined}`} /></Link>
                <ProfileCard className={styles.profileCard} />
            </div>
        </header >
    )
}

export default Header;