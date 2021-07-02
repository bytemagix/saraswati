import Navbar from "../../Users/Navbar/Navbar";
import styles from "./Layout.module.css";
import Cart from "../../Users/StudyMaterials/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import { userActions } from "../../../store/slices/user-slice";
import { useEffect } from "react";

const Layout = (props) => {
  const isCartOpen = useSelector((state) => state.userSlice.isCartModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const localId = localStorage.getItem("authToken");
    const emailId = localStorage.getItem("emailId");

    console.log(localId);
    console.log(emailId);

    if (localId) {
      dispatch(userActions.login({ localId, emailId }));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles["main"]}>{props.children}</main>
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
