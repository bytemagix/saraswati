import styles from "./SideDrawer.module.css";
import NavLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { userActions } from "../../../../store/slices/user-slice";

import {
  FaHome,
  FaTv,
  FaUser,
  FaBook,
  FaUserGraduate,
  FaIdBadge,
  FaFileDownload,
  FaGraduationCap,
  FaLock,
} from "react-icons/fa";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state) => state.userSlice.authInfo);

  const logoutHandler = () => {
    dispatch(userActions.logout());
    localStorage.removeItem("authToken");
    localStorage.removeItem("emailId");
    router.push("/");
  };

  return (
    <>
      <div className={styles["sidenav"]}>
        <div className={styles["menu"]}>
          <ul className={styles["menu-items"]}>
            <li>
              <span className={styles["icon"]}>
                <FaHome />
              </span>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaTv />
              </span>
              <NavLink href="/online-class">Online Class</NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaUser />
              </span>
              <NavLink href="/home-tutor">Home Tutor</NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaBook />
              </span>
              <NavLink href="/study-materials">Study Materials</NavLink>
            </li>
          </ul>
        </div>

        {!auth.isAuthenticated && (
          <div className={styles["list-item-login"]}>
            <span className={styles["icon"]}>
              <FaLock />
            </span>
            <span>
              <NavLink href="/login">Login</NavLink>
            </span>
          </div>
        )}

        {auth.isAuthenticated && (
          <div className={styles["dashboard-section"]}>
            <div className={styles["section-header"]}>
              <span className={styles["section-header-title"]}>
                Student Area
              </span>
            </div>

            <div className={styles["menu"]}>
              <ul className={styles["menu-items"]}>
                <li className={styles["list-item"]}>
                  <span className={styles["icon"]}>
                    <FaUserGraduate />
                  </span>
                  <NavLink href="/student-dashboard">Student Home</NavLink>
                </li>
                <li className={styles["list-item"]}>
                  <span className={styles["icon"]}>
                    <FaIdBadge />
                  </span>
                  <NavLink href="/student-dashboard/profile">Profile</NavLink>
                </li>
                <li className={styles["list-item"]}>
                  <span className={styles["icon"]}>
                    <FaFileDownload />
                  </span>
                  <NavLink href="/student-dashboard/download-materials">
                    Download Materials
                  </NavLink>
                </li>
                <li className={styles["list-item"]}>
                  <span className={styles["icon"]}>
                    <FaGraduationCap />
                  </span>
                  <NavLink href="/student-dashboard/my-enrollments">
                    My Enrollments
                  </NavLink>
                </li>
              </ul>

              <div
                onClick={logoutHandler}
                className={styles["list-item-logout"]}
              >
                <span className={styles["icon"]}>
                  <FaLock />
                </span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default SideDrawer;
