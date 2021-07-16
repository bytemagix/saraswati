import Navbar from "../../Users/Navbar/Navbar";
import styles from "./StudentLayout.module.css";
import Cart from "../../Users/StudyMaterials/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FooterSpinner from "../UI/FooterSpinner/FooterSpinner";

const StudentLayout = (props) => {
  const isCartOpen = useSelector((state) => state.userSlice.isCartModalOpen);

  return (
    <>
      <Navbar />
      <div className={styles["main"]}>
        <div className={styles["sidebar"]}>
          <Sidebar />
        </div>
        <main className={styles["content"]}>{props.children}</main>
      </div>
      {isCartOpen && (
        <div className={styles["cart"]}>
          <Cart />
        </div>
      )}
    </>
  );
};

export default StudentLayout;
