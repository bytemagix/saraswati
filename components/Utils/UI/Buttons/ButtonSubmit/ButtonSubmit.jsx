import styles from './ButtonSubmit.module.css';

const ButtonSubmit = props => {
    return <button type={props.type} className={styles['button']}>{props.title}</button>
}

export default ButtonSubmit;