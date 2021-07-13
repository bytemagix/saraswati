import styles from './Modal.module.css';

const Modal = props => {

    return (
        <div className={styles['modal']}>
            <div className={styles['modal-content']}>
                {props.children}
            </div>
            <div className={styles['backdrop']} onClick={props.onModalClose}></div>
        </div>
    );
}

export default Modal;