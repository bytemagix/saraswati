import styles from "./Sitemap.module.css";
import NavLink from "next/link";

const SiteMap = (props) => {
  return (
    <div className={styles["site-map"]}>
      <div className={styles["header"]}>
        <span className={styles["header-title"]}>Site Map</span>
      </div>
      <div className={styles["main"]}>
        
        <div className={styles["flex-item"]}>
          <ul className={styles["menu-items"]}>
            <li className={styles["menu-item"]}>
              <NavLink href="/">Home</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/study-materials">Study Materials</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/classroom-courses">Classroom Courses</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/online-class">Online Class</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/home-tutor">Home Tutors</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles["flex-item"]}>
          <ul className={styles["menu-items"]}>
            <li className={styles["menu-item"]}>
              <NavLink href="/student-dashboard">Student Dashboard</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/profile">Profile</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/student-dashboard/download-materials">
                Download Study Materials
              </NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/student-dashboard/my-enrollments">
                Enrollments
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className={styles["flex-item"]}>
          <ul className={styles["menu-items"]}>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/about-us">About Us</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/contact-us">Contact Us</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/pricing">Pricing</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
            <li className={styles["menu-item"]}>
              <NavLink href="/informations/cancellation-and-refund">Cancellation & Refund Policy</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SiteMap;
