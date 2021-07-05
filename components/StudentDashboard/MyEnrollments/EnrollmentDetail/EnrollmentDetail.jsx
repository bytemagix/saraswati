import styles from './EnrollmentDetail.module.css';

const EnrollmentDetail = props => {
    const course = props.course;
    
    return (
        <div className={styles['enrollment-detail']}>
            Enrollment Details
        </div>
    );
}

export default EnrollmentDetail;