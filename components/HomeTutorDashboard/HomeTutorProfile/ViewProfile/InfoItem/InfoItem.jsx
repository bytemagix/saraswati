import styles from './InfoItem.module.css';

const InfoItem = props => {
    return (
        <div className={styles['item']}>
            <span className={styles['item-label']}>{props.label}</span>
            <span className={styles['item-value']}>{props.value}</span>
        </div>
    );
}

export default InfoItem;