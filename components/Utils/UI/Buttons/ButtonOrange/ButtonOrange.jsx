import styles from './ButtonOrange.module.css';

const ButtonOrange = props => {

    return <button type={props.type} onClick={props.onClick} className={styles['button']}>{props.title}</button>
}

export default ButtonOrange;