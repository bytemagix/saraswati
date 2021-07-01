import Navbar from "../../Users/Navbar/Navbar";
import styles from "./Layout.module.css";
import Cart from "../../Users/StudyMaterials/Cart/Cart";
import { useSelector } from 'react-redux';
import Footer from "../../Users/Footer/Footer";

const Layout = (props) => {
  const isCartOpen = useSelector((state) => state.userSlice.isCartModalOpen);
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
