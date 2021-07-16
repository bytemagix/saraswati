import styles from "./Sidebar.module.css";
import NavLink from "next/link";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/slices/user-slice";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(userActions.logout());
    localStorage.removeItem("authToken");
    localStorage.removeItem("emailId");
    router.push("/");
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["navbar"]}>
        <div className={styles["menu"]}>
          <ul className={styles["list-items"]}>
            <li className={styles["list-item"]}>
              <NavLink href="/student-dashboard">Student Home</NavLink>
            </li>
            <li className={styles["list-item"]}>
              <NavLink href="/student-dashboard/profile">Profile</NavLink>
            </li>
            <li className={styles["list-item"]}>
              <NavLink href="/student-dashboard/download-materials">
                Download Materials
              </NavLink>
            </li>
            <li className={styles["list-item"]}>
              <NavLink href="/student-dashboard/my-enrollments">
                My Enrollments
              </NavLink>
            </li>
            <li onClick={logoutHandler} className={styles["list-item-logout"]}>
              Logout
            </li>
          </ul>
        </div>
        <div className={styles["background"]}></div>
      </div>
    </div>
  );
};

export default Sidebar;
