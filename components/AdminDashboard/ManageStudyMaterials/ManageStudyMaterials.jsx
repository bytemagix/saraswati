import styles from './ManageStudyMaterials.module.css';
import ManageCategories from './ManageCategories/ManageCategories';
import ManageBooks from './ManageBooks/ManageBooks';

const ManageStudyMaterials = props => {

    return (
        <div className={styles['manage-study-materials']}>
            <ManageCategories />
            <ManageBooks />
        </div>
    )
}

export default ManageStudyMaterials;