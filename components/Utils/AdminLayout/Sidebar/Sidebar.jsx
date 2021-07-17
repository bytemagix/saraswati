import styles from "./Sidebar.module.css";
import NavLink from 'next/link';
import { useDispatch } from "react-redux";
import { adminActions } from '../../../../store/slices/admin-slice';

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminActions.logout());
  }

  return (
    <div className={styles['sidebar']}>
      <div className={styles["menu"]}>
        <ul className={styles["list-items"]}>
          <li className={styles["list-item"]}><NavLink href="/admin/manage-study-materials">Manage Study Materials</NavLink></li>
          <li className={styles["list-item"]}><NavLink href="/admin/manage-online-class">Manage Online Class</NavLink></li>
          <li className={styles["list-item"]}><NavLink href="/admin/enrollments">Enrollments</NavLink></li>
          <li onClick={logoutHandler} className={styles['list-item-logout']}>Logout</li>
        </ul>
      </div>
      <div className={styles['background']}></div>
    </div>
  );
};

export default Sidebar;
