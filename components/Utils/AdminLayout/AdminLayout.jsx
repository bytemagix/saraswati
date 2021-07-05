import styles from "./AdminLayout.module.css";
import { useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const AdminLayout = (props) => {
  return (
    <>
      <div className={styles['navbar']}>
        <span className={styles['navbar-header']}>Admin Dashboard</span>
      </div>
      <div className={styles["main"]}>
        <div className={styles['sidebar']}>
            <Sidebar />
        </div>
        <main className={styles["content"]}>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
