import styles from './ManageCourses.module.css';
import Courses from './Courses/Courses';

const ManageCourses = props => {

    return (
        <div className={styles['manage-study-materials']}>
            <Courses />
        </div>
    )
}

export default ManageCourses;