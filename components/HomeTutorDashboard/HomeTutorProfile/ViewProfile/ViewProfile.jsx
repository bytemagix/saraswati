import styles from './ViewProfile.module.css';
import InfoItem from './InfoItem/InfoItem';

const ViewProfile = props => {

    return (
        <div className={styles['view-profile']}>
            <div className={styles['card']}>
                <div className={styles['header']}><span className={styles['header-title']}>My Profile</span></div>
                <div className={styles['contents']}>
                    <InfoItem label="Name" value={props.data.tutorName} />
                </div>
            </div>
        </div>
    );
}
export default ViewProfile;