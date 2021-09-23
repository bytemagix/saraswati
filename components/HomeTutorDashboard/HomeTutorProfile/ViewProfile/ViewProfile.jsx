import styles from "./ViewProfile.module.css";
import InfoItem from "./InfoItem/InfoItem";
import CourseItem from "./CourseItem/CourseItem";

const ViewProfile = (props) => {
  const courses = [];
  for (const key in props.data.Courses) {
    const course = props.data.Courses[key];
    courses.push(course);
  }

  return (
    <div className={styles["view-profile"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>My Profile</span>
          <span className={styles["edit-btn"]} onClick={props.onEdit}>
            Edit
          </span>
        </div>
        <hr />
        <div className={styles["contents"]}>
          <div>
            <InfoItem label="Name" value={props.data.tutorName} />
            <InfoItem label="Mobile No" value={props.data.tutorMobileNo} />
            <InfoItem label="Email" value={props.data.tutorEmail} />
            <InfoItem
              label="Qualification"
              value={props.data.tutorQualification}
            />
            <InfoItem
              label="Experience"
              value={props.data.tutorExperience + "+ Years"}
            />
          </div>
          <div
            className={styles["image-container"]}
            style={{
              backgroundImage: `url(${props.data.tutorProfilePhotoUrl})`,
            }}
          ></div>
        </div>

        <div className={styles["header-courses"]}>
          <span className={styles["header-title"]}>Courses</span>
        </div>
        <hr />
        {!props.data.Courses && (
          <p style={{ color: "red" }}>No courses added yet.</p>
        )}
        <div className={styles["grid"]}>
          {courses.length !== 0 &&
            courses.map((item) => (
              <CourseItem
                key={item.courseId}
                name={item.course}
                ageGroup={item.ageGroup}
                courseFee={item.courseFee}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
