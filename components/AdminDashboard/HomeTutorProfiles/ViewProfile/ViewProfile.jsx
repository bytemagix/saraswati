import styles from "./ViewProfile.module.css";
import { localUrl, baseUrl } from "../../../../constants/urls";
import { useSelector } from "react-redux";
import InfoItem from "./InfoItem/InfoItem";
import { useRouter } from "next/router";
import CourseItem from "./CourseItem/CourseItem";

const ViewProfile = (props) => {
  const auth = useSelector((state) => state.adminSlice.authInfo);
  const router = useRouter();
  const profileData = props.profileData;

  const courses = [];
  for (const key in profileData.Courses) {
    const course = profileData.Courses[key];
    courses.push(course);
  }

  const updateProfileStatus = async (status) => {
    const formData = new FormData();
    formData.append("token", auth.token);
    formData.append("tutorId", profileData.tutorId);
    formData.append("status", status);
    const res = await fetch(`${baseUrl}/admin/update-home-tutor-status`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.isUpdated) {
      router.push("/admin/home-tutor-profiles");
    }
  };

  return (
    <div className={styles["view-profile"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Tutor Profile</span>
        </div>
        <hr />
        <div className={styles["contents"]}>
          <div>
            <InfoItem label="Name" value={profileData.tutorName} />
            <InfoItem label="Mobile No" value={profileData.tutorMobileNo} />
            <InfoItem label="Email" value={profileData.tutorEmail} />
            <InfoItem
              label="Qualification"
              value={profileData.tutorQualification}
            />
            <InfoItem label="Status" value={profileData.status} />
          </div>
          <div
            className={styles["image-container"]}
            style={{
              backgroundImage: `url(${profileData.tutorProfilePhotoUrl})`,
            }}
          ></div>
        </div>

        <div className={styles["header-courses"]}>
          <span className={styles["header-title"]}>Courses</span>
        </div>
        <hr />
        {!profileData.Courses && (
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

        {profileData.status === "New" && (
          <div className={styles["actions"]}>
            <span
              className={styles["approve-btn"]}
              onClick={updateProfileStatus.bind(this, "Verified")}
            >
              Approve
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewProfile;
