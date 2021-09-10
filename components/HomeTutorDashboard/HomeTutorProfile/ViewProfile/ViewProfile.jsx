import styles from "./ViewProfile.module.css";
import InfoItem from "./InfoItem/InfoItem";
import Image from 'next/image';

const ViewProfile = props => {
  return (
    <div className={styles["view-profile"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>My Profile</span>
          <span className={styles['edit-btn']} onClick={props.onEdit}>Edit</span>
        </div>
        <hr />
        <div className={styles["contents"]}>
          <div>
          <InfoItem label="Name" value={props.data.tutorName} />
          <InfoItem label="Mobile No" value={props.data.tutorMobileNo} />
          <InfoItem label="Email" value={props.data.tutorEmail} />
          <InfoItem label="Qualification" value={props.data.tutorQualification} />
          </div>
          <div
            className={styles["image-container"]}
            style={{ backgroundImage: `url(${props.data.tutorProfilePhotoUrl})` }}
          ></div>
        </div>

        <div className={styles["header-courses"]}>
          <span className={styles["header-title"]}>Courses</span>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default ViewProfile;
