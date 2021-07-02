import Navbar from "../../Users/Navbar/Navbar";
import styles from "./StudentLayout.module.css";
import Cart from "../../Users/StudyMaterials/Cart/Cart";
import { useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const StudentLayout = (props) => {
  const isCartOpen = useSelector((state) => state.userSlice.isCartModalOpen);
  return (
    <>
      <Navbar />
      <div className={styles["main"]}>
        <div className={styles['sidebar']}>
            <Sidebar />
        </div>
        <main className={styles["content"]}>{props.children}</main>
      </div>
      {isCartOpen && (
        <div className={styles["cart"]}>
          <Cart />
        </div>
      )}
      <Footer />
    </>
  );
};

export default StudentLayout;
