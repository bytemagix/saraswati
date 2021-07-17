import Navbar from "../../Users/Navbar/Navbar";
import styles from "./Layout.module.css";
import Cart from "../../Users/StudyMaterials/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import { userActions } from "../../../store/slices/user-slice";
import { useEffect } from "react";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Layout = (props) => {
  const isCartOpen = useSelector((state) => state.userSlice.isCartModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const localId = localStorage.getItem("authToken");
    const emailId = localStorage.getItem("emailId");

    if (localId) {
      dispatch(userActions.login({ localId, emailId }));
    }

    // Toogle Body Scroll
    const mainBody = document.querySelector("#mainbody");

    if (isCartOpen) {
      disableBodyScroll(mainBody);
    } else {
      enableBodyScroll(mainBody);
    }
  }, [isCartOpen]);

  const checkAuth = async () => {};

  return (
    <>
      <Navbar />
      <main className={styles["main"]} id="mainbody">
        {props.children}
      </main>
      {isCartOpen && (
        <div className={styles["cart"]}>
          <Cart />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
