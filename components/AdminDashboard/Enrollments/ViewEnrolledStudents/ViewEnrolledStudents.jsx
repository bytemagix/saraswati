import styles from "./ViewEnrolledStudent.module.css";
import StudentItem from "./StudentItem/StudentItem";

const ViewEnrolledStudent = (props) => {
  const students = props.students;

  return (
    <div className={styles["view-enrolled-student"]}>
      <div className={styles["header"]}>
        <span className={styles["header-title"]}>Enrolled Student</span>
      </div>

      <div className={styles["student-list"]}>
        {students.map((item, index) => (
          <StudentItem
            key={item.userId}
            slno={index + 1}
            name={item.name}
            mobileNo={item.mobileNo}
            emailId={item.emailId}
            prevSchool={item.prevSchool}
            address={item.address}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewEnrolledStudent;
