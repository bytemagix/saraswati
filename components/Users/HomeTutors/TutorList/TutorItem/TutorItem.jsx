import styles from "./TutorItem.module.css";

const TutorItem = props => {
    let expertIn = "";
    for(const key in props.courses){
        expertIn += props.courses[key].course + ", ";
    }

  return (
    <div className={styles['card']}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${props.tutorProfilePhotoUrl})` }}
      ></div>
      <div className={styles['info']}>
          <span className={styles['name']}>{props.tutorName}</span>
          <span className={styles['qualification']}>{props.tutorQualification}</span>
          <span className={styles['expertIn']}>{expertIn}</span>
      </div>
    </div>
  );
};

export default TutorItem;