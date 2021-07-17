import styles from './MakePaymentButton.module.css';

const MakePaymentButton = props => {

    return <button type={props.type} onClick={props.onClick} className={styles['button']}>{props.title}</button>
}

export default MakePaymentButton;