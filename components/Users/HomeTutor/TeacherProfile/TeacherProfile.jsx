import styles from './TeacherProfile.module.css';
import Link from 'next/link';

const TeacherProfile = props => {

    return (
        <div className={styles['card']}>
            <div className={styles['image-container']}>
                <img src={props.image} />
            </div>
            <div className={styles['text-container']}>
                <span className={styles['name']}>{props.name}</span>
                <span className={styles['subjects']}>{props.subjects}</span>
                <span className={styles['educations']}>{props.qualification}</span>
                <span className={styles['experience']}>{props.experience}+ Years of Eperience</span>
            </div>
            <div className={styles['actions']}>
                <button className={styles['view-profile__btn']}>
                    <Link href={`/home-tutor/${props.teacherId}`}>View Profile</Link>
                </button>
            </div>
        </div>
    );
}

export default TeacherProfile;