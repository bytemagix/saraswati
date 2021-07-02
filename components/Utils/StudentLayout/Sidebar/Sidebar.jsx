import styles from "./Sidebar.module.css";
import NavLink from 'next/link';

const Sidebar = (props) => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles["menu"]}>
        <ul className={styles["list-items"]}>
          <li className={styles["list-item"]}><NavLink href="/student-dashboard/profile">Profile</NavLink></li>
          <li className={styles["list-item"]}><NavLink href="/student-dashboard/download-materials">Download Materials</NavLink></li>
        </ul>
      </div>
      <div className={styles['background']}></div>
    </div>
  );
};

export default Sidebar;
