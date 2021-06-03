import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Cart from "../StudyMaterials/Cart/Cart";
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const isCartOpen = useSelector((state) => state.cartReducer.isCartModalOpen);
  return (
    <>
      <Navbar />
      <main className={styles["main"]}>{props.children}</main>
      {isCartOpen && (
        <div className={styles["cart"]}>
          <Cart />
        </div>
      )}
    </>
  );
};

export default Layout;
