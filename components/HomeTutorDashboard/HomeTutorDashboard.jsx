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
            Explore Home Tutor Dashboard
          </span>
          <p>
            Our service is currently avaialable in selected cities. If you are
            from those cities you can register yourself as a Home Tutor. To
            register under the profile section you need to fill up your basic
            information. Your application will be reviewed by our team. Once
            approved your profile will be displayed in our website. If student's
            requirement matches your profile than you will be able to offer your
            services to that student.
          </p>

          <div className={styles["feature"]}>
            <span className={styles["feature-header"]}>Manage Courses</span>
            <p>
              Under Manage Courses section, You can manage your courses or
              subjects you like teach your students.
            </p>
          </div>

          <div className={styles["feature"]}>
            <span className={styles["feature-header"]}>
              Enrolled Students
            </span>
            <p>
              Under Enrolled Student section, You will be able to view your currently enrolled students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTutorDashboard;
