import Courses from './Courses/Courses';
import styles from './Enrollments.module.css';

const Enrollments = props => {

    return (
        <div className={styles['enrollments']}>
            <Courses />
        </div>
    );
}

export default Enrollments;