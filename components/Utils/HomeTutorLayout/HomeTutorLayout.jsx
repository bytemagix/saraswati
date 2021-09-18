import styles from "./HomeTutorLayout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import HomeTutorNavbar from "./HomeTutorNavbar/HomeTutorNavbar";

const HomeTutorLayout = (props) => {
  return (
    <>
      <HomeTutorNavbar />
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

export default HomeTutorLayout;
