import styles from "./Sidebar.module.css";
import NavLink from "next/link";
import { useDispatch } from "react-redux";
import { homeTutorUserActions } from "../../../../store/slices/home-tutor-user-slice";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(homeTutorUserActions.logout());
    localStorage.removeItem("homeTutorId");
    localStorage.removeItem("homeTutorEmail");
    router.push("/home-tutor-dashboard");
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["menu"]}>
        <ul className={styles["list-items"]}>
          <li className={styles["list-item"]}>
            <NavLink href="/home-tutor-dashboard">
              <span className={styles["link"]}>Home</span>
            </NavLink>
          </li>
          <li className={styles["list-item"]}>
            <NavLink href="/home-tutor-dashboard/profile">
              <span className={styles["link"]}>Profile</span>
            </NavLink>
          </li>
          <li className={styles["list-item"]}>
            <NavLink href="/home-tutor-dashboard/manage-courses">
              <span className={styles["link"]}>Manage Courses</span>
            </NavLink>
          </li>
          <li className={styles["list-item"]}>
            <NavLink href="/home-tutor-dashboard/enrollments">
              <span className={styles["link"]}>Enrolled Students</span>
            </NavLink>
          </li>
          <li onClick={logoutHandler} className={styles["list-item-logout"]}>
            Logout
          </li>
        </ul>
      </div>
      <div className={styles["background"]}></div>
    </div>
  );
};

export default Sidebar;
