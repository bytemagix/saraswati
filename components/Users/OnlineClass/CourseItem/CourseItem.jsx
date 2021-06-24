import { useRouter } from 'next/router';
import styles from './CourseItem.module.css';

const CourseItem = props => {
    const router = useRouter();

    const enrollHandler = () => {
        router.push(`/online-class/${props.courseId}`);
    }

    return (
        <div className={styles['course-item']}>
            <div className={styles['course-info']}>
                <span>{props.title}</span>
                <span>{props.tutor}</span>
                <span>{props.description}</span>
            </div>
            <div className={styles['actions']}>
                <button className={styles['btn-enroll']} onClick={enrollHandler}>Enroll Now</button>
            </div>
        </div>
    );
}

export default CourseItem;