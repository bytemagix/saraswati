import { useState } from "react";
import styles from "./AdminNavbar.module.css";
import AdminSideDrawer from "./AdminSideDrawer/AdminSideDrawer";

const AdminNavbar = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const showSideDrawerHandler = () => {
        setShowSideDrawer(true);
    }

    const hideSideNavHandler = () => {
        setShowSideDrawer(false);
    }

    return (
    <div className={styles["navbar"]}>
      
      <div className={styles["menu-icon"]} onClick={showSideDrawerHandler}>
        <div className={styles["menu-icon__line"]}></div>
        <div className={styles["menu-icon__line"]}></div>
        <div className={styles["menu-icon__line"]}></div>
      </div>

      <div className={styles['header']}>
        <span className={styles['header-title']}>Home Tutor Dashboard</span>
      </div>

      {showSideDrawer && (
        <div className={styles["drawer"]}>
          <div className={styles["sidenav"]}>
            <AdminSideDrawer />
          </div>
          <div className={styles["background"]}></div>
        </div>
      )}

      {showSideDrawer && (
        <div className={styles["backdrop"]} onClick={hideSideNavHandler}></div>
      )}
    </div>
  );
};

export default AdminNavbar;
