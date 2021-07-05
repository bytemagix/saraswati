import styles from './ManageStudyMaterials.module.css';
import ManageSubjects from './ManageSubjects/ManageSubjects';

const ManageStudyMaterials = props => {

    return (
        <div className={styles['manage-study-materials']}>
            <ManageSubjects />
        </div>
    )
}

export default ManageStudyMaterials;