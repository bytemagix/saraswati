import styles from './SuccessMessage.module.css';

const SuccessMessage = props => {

    return (
        <div className={styles['success']}>
            <span className={styles['message']}>Book Successfully sent to your Email address</span>
            <div className={styles['actions']}>
                <button className={styles['button-done']} onClick={props.onClose}>Done</button>
            </div>
        </div>
    );
}

export default SuccessMessage;