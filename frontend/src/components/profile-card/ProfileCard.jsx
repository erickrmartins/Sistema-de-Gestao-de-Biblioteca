import styles from './ProfileCard.module.css';
import ProfilePicture from '../../assets/profile-picture.svg?react';
import { DataProfile } from '../../fake-data/DataProfile.jsx'

function ProfileCard() {
    const data = DataProfile();

    return (
        <div className={styles.card}>
            <ProfilePicture className={styles.icon} />
            <div className={styles.text}>
                <span className={styles.name}>{data.name.split(' ')[0]}</span>
                <span className={styles.role}>{data.role}</span>
            </div>
        </div>
    )
}

export default ProfileCard;