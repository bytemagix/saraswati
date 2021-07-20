import styles from "./AdminLayout.module.css";
import { useSelector } from "react-redux";
import Footer from "../../Users/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import AdminNavbar from "./AdminNavbar/AdminNavbar";

const AdminLayout = (props) => {
  return (
    <>
      <AdminNavbar />
      <div className={styles["main"]}>
        <div className={styles['sidebar']}>
            <Sidebar />
        </div>
        <main className={styles["content"]}>{props.children}</main>
      </div>
      <div className={styles["background"]}></div>
    </>
  );
};

export default AdminLayout;
