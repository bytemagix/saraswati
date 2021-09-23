import styles from './CourseItem.module.css';
import {FaTrash} from 'react-icons/fa';

const CourseItem = props => {
    return (
        <div className={styles['subitem']}>
            <span className={styles['sub-name']}>{props.name}</span>
            <span>{props.ageGroup}</span>
            <span>Rs. {props.courseFee} (Per Class)</span>
        </div>
    );
}

export default CourseItem;