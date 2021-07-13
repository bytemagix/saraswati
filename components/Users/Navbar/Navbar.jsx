import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import SideNav from "./SideNav/SideNav";
import NavLink from "next/link";
import { userActions } from "../../../store/slices/user-slice";

const Navbar = (props) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartItems = useSelector((state) => state.userSlice.cart.cartItems);
  const auth = useSelector((state) => state.userSlice.authInfo);

  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(userActions.openCartModal());
  };

  const showSideNavHandler = () => {
    setShowSideNav((prevState) => !prevState);
  };

  const btnClasses = `${styles.cart} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

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
          {!auth.isAuthenticated && (
            <li className={styles["dashboard"]}>
              <NavLink href="/login">Login</NavLink>
            </li>
          )}

          {auth.isAuthenticated && (
            <li className={styles["dashboard"]}>
              <NavLink href="/student-dashboard">Student Dashboard</NavLink>
            </li>
          )}
        </ul>
      </div>

      {auth.isAuthenticated && (
        <div className={btnClasses} onClick={openCartHandler}>
          <span>{cartItems.length}</span>
        </div>
      )}

      {showSideNav && (
        <div className={styles["sidenav"]}>
          <SideNav />
        </div>
      )}
      {showSideNav && (
        <div className={styles["backdrop"]} onClick={showSideNavHandler}></div>
      )}
    </div>
  );
};

export default Navbar;
