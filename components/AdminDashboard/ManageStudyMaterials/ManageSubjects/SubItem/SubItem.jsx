import styles from './SubItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SubItem = props => {
    return (
        <div className={styles['subitem']}>
            <span className={styles['sub-name']}>{props.name}</span>
            <span><FontAwesomeIcon icon={faTrash} className={styles["icon"]} onClick={props.ondelete} /></span>
        </div>
    );
}

export default SubItem;