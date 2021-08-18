import styles from './InfoItem.module.css';

const InfoItem = props => {
    return (
        <div className={styles['item']}>
            <span>{props.label}</span>
            <span>{props.value}</span>
        </div>
    );
}

export default InfoItem;