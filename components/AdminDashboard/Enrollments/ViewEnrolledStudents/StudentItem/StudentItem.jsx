import styles from './StudentItem.module.css';

const StudentItem = props => {

    return (
        <div className={styles['student-item']}>
            <span>#{props.slno}</span>
            <span>{props.name}</span>
            <span>{props.mobileNo}</span>
            <span>{props.emailId}</span>
            <span>{props.prevSchool}</span>
            <span>{props.address}</span>
            <div>
                <hr />
            </div>
        </div>
    );
}

export default StudentItem;