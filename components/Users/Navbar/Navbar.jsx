import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import NavLink from "next/link";
import { userActions } from "../../../store/slices/user-slice";
import SideDrawer from "./SideDrawer/SideDrawer";

const Navbar = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartItems = useSelector((state) => state.userSlice.cart.cartItems);
  const auth = useSelector((state) => state.userSlice.authInfo);

  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(userActions.openCartModal());
  };

  const showSideNavHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
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
        {!showSideDrawer && (
          <img src="/images/logo.webp" alt="Logo" />
        )}
        <span>SARASWATI TUTORIAL</span>
      </div>
      <div className={styles["menu"]}>
        <ul className={styles["menu-items"]}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/study-materials">Study Materials</NavLink>
          </li>
          <li>
            <NavLink href="/classroom-courses">Classroom Courses</NavLink>
          </li>
          <li>
            <NavLink href="/online-class">Online Class</NavLink>
          </li>
          <li>
            <NavLink href="/home-tutor">Home Tutor</NavLink>
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

      {auth.isAuthenticated && cartItems.length !== 0 && (
        <div className={btnClasses} onClick={openCartHandler}>
          <span>{cartItems.length}</span>
        </div>
      )}

      {showSideDrawer && (
        <div className={styles["drawer"]}>
          <div className={styles["sidenav"]}>
            <SideDrawer />
          </div>
          <div className={styles["background"]}></div>
        </div>
      )}

      {showSideDrawer && (
        <div className={styles["backdrop"]} onClick={showSideNavHandler}></div>
      )}
    </div>
  );
};

export default Navbar;