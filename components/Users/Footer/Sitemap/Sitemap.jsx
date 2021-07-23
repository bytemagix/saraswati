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
              <NavLink href="/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SiteMap;
