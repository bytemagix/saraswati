import styles from "./HomeTutorSideDrawer.module.css";
import NavLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { homeTutorActions } from "../../../../../store/slices/home-tutor-slice";

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

const HomeTutorSideDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state) => state.homeTutorUserSlice.authInfo);

  const logoutHandler = () => {
    dispatch(homeTutorUserActions.logout());
    localStorage.removeItem("homeTutorId");
    localStorage.removeItem("homeTutorEmail");
    router.push("/home-tutor-dashboard");
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
              <NavLink href="/home-tutor-dashboard">Home</NavLink>
            </li>

            <li>
              <span className={styles["icon"]}>
                <FaHome />
              </span>
              <NavLink href="/home-tutor-dashboard/profile">Profile</NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaTv />
              </span>
              <NavLink href="/home-tutor-dashboard/manage-courses">
                Manage Online Class
              </NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaUser />
              </span>
              <NavLink href="/home-tutor-dashboard/enrollments">
                Enrolled Students
              </NavLink>
            </li>
          </ul>
        </div>

        <div onClick={logoutHandler} className={styles["list-item-logout"]}>
          <span className={styles["icon"]}>
            <FaLock />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default HomeTutorSideDrawer;