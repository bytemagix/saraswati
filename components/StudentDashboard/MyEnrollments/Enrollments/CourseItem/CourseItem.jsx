import { useRouter } from 'next/router';
import styles from './CourseItem.module.css';
import NavLink from 'next/link';

const CourseItem = props => {
    const url = `/student-dashboard/my-enrollments/${props.courseId}`;

    return (
        <div className={styles['course-item']}>
            <div className={styles['course-info']}>
                <span>{props.title}</span>
                <span>{props.tutor}</span>
                <span>{props.description}</span>
            </div>

            <div className={styles['upcoming-class-info']}>
                <span className={styles['header-upcoming-class']}>Upcoming Class</span>
                <span>Online Class Detail will be available soon</span>
            </div>
        </div>
    );
}

export default CourseItem;