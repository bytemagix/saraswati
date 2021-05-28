import { useState } from "react";
import styles from "./Navbar.module.css";
import SideNav from "./SideNav/SideNav";

const Navbar = (props) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const showSideNavHandler = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["brand"]}>
        <div className={styles["menu-icon"]} onClick={showSideNavHandler}>
          <div className={styles["menu-icon__line"]}></div>
          <div className={styles["menu-icon__line"]}></div>
          <div className={styles["menu-icon__line"]}></div>
        </div>
        <img src="https://static.wixstatic.com/media/bbc6b5_4d48047f9def41adb4ca0e1b06eb0ff9~mv2.jpeg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202020-10-19%20at%204_02_51%20PM_.webp" />
        <span>SARASWATI TUTORIALS</span>
      </div>
      <div className={styles["menu"]}>
        <ul className={styles["menu-items"]}>
          <li>Home</li>
          <li>Online Class</li>
          <li>Home Tutor</li>
          <li>Study Material</li>
          <li>Profile</li>
        </ul>
      </div>
      {showSideNav && (
        <div className={styles["sidenav"]}>
          <SideNav />
        </div>
      )}
      { showSideNav && <div className={styles["backdrop"]} onClick={showSideNavHandler}></div>}
    </div>
  );
};

export default Navbar;
