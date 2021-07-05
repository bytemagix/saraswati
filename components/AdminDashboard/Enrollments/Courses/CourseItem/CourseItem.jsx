import { useRouter } from 'next/router';
import styles from './CourseItem.module.css';
import NavLink from 'next/link';

const CourseItem = props => {
    const url = `/admin/enrollments/${props.courseId}`;
    console.log(url);

    return (
        <div className={styles['course-item']}>
            <div className={styles['course-info']}>
                <span>{props.title}</span>
                <span>{props.tutor}</span>
                <span>{props.description}</span>
            </div>
            <div className={styles['actions']}>
                <button className={styles['btn-enroll']}><NavLink href={url}>View Enrolled Students</NavLink></button>
            </div>
        </div>
    );
}

export default CourseItem;