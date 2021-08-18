import styles from "./Sidebar.module.css";
import NavLink from 'next/link';
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
  }

  return (
    <div className={styles['sidebar']}>
      <div className={styles["menu"]}>
        <ul className={styles["list-items"]}>
          <li className={styles["list-item"]}><NavLink href="/home-tutor-dashboard/profile">Profile</NavLink></li>
          <li className={styles["list-item"]}><NavLink href="/home-tutor-dashboard/manage-online-class">Manage Courses</NavLink></li>
          <li className={styles["list-item"]}><NavLink href="/admin/enrollments">Enrolled Students</NavLink></li>
          <li onClick={logoutHandler} className={styles['list-item-logout']}>Logout</li>
        </ul>
      </div>
      <div className={styles['background']}></div>
    </div>
  );
};

export default Sidebar;
