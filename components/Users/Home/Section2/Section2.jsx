import styles from "./Section2.module.css";

const Section2 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles["header"]}>SARASWATI TUTORIAL</h2>
          <p className={styles["description"]}>
            Saraswati Tutorial Home is one of the premier Coaching Institute in
            Assam with a record of many success stories, the institute has
            streaming ahead setting up a new standard in today's competitive
            world. After the successful establishment at Mangaldai the HQ of
            DARRANG District. we now established at Guwahati also the HQ of
            North Eastern States. Besides classroom activities, we also provide
            online classes, where students can take their classes in Vernacular
            Languages also. Our Faculty is dedicated to enhancing the
            credibility and integrity of the field of coaching and practice. The
            institute has a unique skill set designed to maximize the
            performance of the students.
          </p>
          <button className={styles["button"]}>Learn More</button>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img
          src="https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg"
          className={styles["image"]}
        />
      </div>
    </div>
  );
};

export default Section2;
