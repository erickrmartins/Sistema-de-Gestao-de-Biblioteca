import styles from './ProfileCard.module.css';
import ProfilePicture from '../../assets/profile-picture.svg?react';
import { DataProfile } from '../../fake-data/DataProfile.jsx';
import Logout from '../../assets/logout.svg?react'
import { Link } from 'react-router-dom';

function ProfileCard() {
    const data = DataProfile();

    return (
        <div className={styles.card}>
            <ProfilePicture className={styles.icon} />
            <div className={styles.text}>
                <span className={styles.name}>{data.name.split(' ')[0]}</span>
                <span className={styles.role}>{data.role}</span>
            </div>
            <Link to='/login'><Logout className={styles.logout} /></Link>
        </div>
    )
}

export default ProfileCard;