import styles from "./ProfileItem.module.css";
import NavLink from "next/link";

const ProfileItem = (props) => {
  const link = `/admin/home-tutor-profiles/${props.tutorId}`;

  return (
    <div className={styles["profile-item"]}>
      <div className={styles["image-container"]}>
        <div
          className={styles["image"]}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>
      </div>
      <div className={styles["info"]}>
        <div className={styles['info-items']}>
          <span className={styles['name']}>{props.name}</span>
          <span>{props.mobileNo}</span>
        </div>
        <div className={styles['actions']}>
          <span className={styles['view-btn']}>
            <NavLink href={link}>View Profile</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
