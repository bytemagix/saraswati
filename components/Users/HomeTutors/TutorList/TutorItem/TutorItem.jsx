import styles from "./TutorItem.module.css";

const TutorItem = props => {

  return (
    <div className={styles['card']}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${props.tutorProfilePhotoUrl})` }}
      ></div>
      <div className={styles['info']}>
          <span className={styles['name']}>{props.displayName}</span>
          <span className={styles['expertIn']}>{props.displaySubject}</span>
      </div>
    </div>
  );
};

export default TutorItem;
