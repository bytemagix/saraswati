import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <>
      <div className={styles["policies"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>About Us</span>
          </div>
          <hr />
          <div>
            <div className={styles["section"]}>
              <p>
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
            </div>

            
            <div className={styles["section"]}>
              <span className={styles["sub-header"]}>
                More About Us
              </span>
              <p>
               For more details About us. You can contact us on saraswatitutorial.mld@gmail.com.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default AboutUs;