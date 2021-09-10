import styles from "./HomeTutorDashboard.module.css";

const HomeTutorDashboard = (props) => {

  return (
    <>
      <div className={styles["dashboard"]}>
        <div className={styles["section"]}>
          <span className={styles["section-header"]}>
            Welcome to Saraswati Tutorials
          </span>
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
          <span className={styles["section-header"]}>
            Explore Student Dashboard
          </span>
          <p>
            Explore student section of this website. The menu on the left side
            of you screen shows different services you can use in our website.
          </p>

          <div className={styles["feature"]}>
            <span className={styles["feature-header"]}>Profile Section</span>
            <p>
              You can add your basic details in profile. This helps to use our
              website conviniently. You don't have type every time your basic
              detail. Which is much more convinient.
            </p>
          </div>

          <div className={styles["feature"]}>
            <span className={styles["feature-header"]}>
              Download Study Materials
            </span>
            <p>
              You can purchased our handpicked study materials from our website.
              All the Ordered Materials will be avaialbale in this section to
              download from here. Its your personal book Library.
            </p>
          </div>

          <div className={styles["feature"]}>
            <span className={styles["feature-header"]}>Ny Enrollments</span>
            <p>
              We Provide Online classes for our students. All the enrolled
              courses information will be shown is this section.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTutorDashboard;