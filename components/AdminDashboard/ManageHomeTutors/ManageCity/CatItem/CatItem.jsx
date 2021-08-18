import styles from './CatItem.module.css';
import {FaTrash} from 'react-icons/fa';

const CatItem= props => {
    return (
        <div className={styles['subitem']}>
            <span className={styles['sub-name']}>{props.name}</span>
            <span><FaTrash onClick={props.ondelete} className={styles['icon']} /></span>
        </div>
    );
}

export default CatItem;