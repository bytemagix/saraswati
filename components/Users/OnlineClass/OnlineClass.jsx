import styles from './OnlineClass.module.css';
import Courses from './Courses/Courses';

const OnlineClass = props => {

    return (
        <>
        <div className={styles['online-class']}>
            <Courses />
        </div>
        <div className={styles['background']}></div>
        </>
    );
}

export default OnlineClass;