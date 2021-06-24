import styles from "./SideNav.module.css";
import NavLink from "next/link";

const SideNav = () => {
  return (
    <>
      <div className={styles["sidenav"]}>
        <div className={styles["menu"]}>
          <ul className={styles["menu-items"]}>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/online-class">Online Class</NavLink>
            </li>
            <li>
              <NavLink href="/home-tutor">Home Tutor</NavLink>
            </li>
            <li>
              <NavLink href="/study-materials">Study Materials</NavLink>
            </li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
