import styles from "./ManageHomeTutors.module.css";
import ManageCity from "./ManageCity/ManageCity";
import ManageAgeGroup from "./ManageAgeGroups/ManageAgeGroup";
import ManageSubjects from "./ManageSubject/ManageSubject";

const ManageHomeTutors = (props) => {
  return (
    <div className={styles['manage-home-tutors']}>
      <ManageCity />
      <ManageAgeGroup />
      <ManageSubjects />
    </div>
  );
};

export default ManageHomeTutors;
