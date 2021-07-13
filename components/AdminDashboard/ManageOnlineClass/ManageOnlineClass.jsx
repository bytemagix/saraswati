import Courses from "./Courses/Courses";
import styles from "./ManageOnlineClass.module.css";
import AddMeetingModal from "./AddMeetingModal/AddMeetingModal";

const ManageOnlineClass = (props) => {
  return (
    <div className={styles["manage-online-class"]}>
      <Courses />
    </div>
  );
};

export default ManageOnlineClass;
