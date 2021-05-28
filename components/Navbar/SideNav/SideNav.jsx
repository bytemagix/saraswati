import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <>
      <div className={styles["sidenav"]}>
        <div className={styles["menu"]}>
          <ul className={styles["menu-items"]}>
            <li>Home</li>
            <li>Online Class</li>
            <li>Home Tutor</li>
            <li>Study Material</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
