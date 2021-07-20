import styles from "./Admin.module.css";

const Admin = (props) => {
  return (
    <>
      <div className={styles["dashboard"]}>
        <div className={styles["section"]}>
          <span className={styles["section-header"]}>
            Welcome to Admin Dashboard for Saraswati Tutorials
          </span>
          <p>
            This is Admin Section for Saraswati Tutorials. You can manage all
            the dynamic contents of the website from this admin panel. Explore
            the Menu on the left side of the screen or Drawer Button on the
            mobile device.
          </p>
        </div>
        <div className={styles["section"]}>
          <span className={styles["section-header"]}>
            Manage Study Materials
          </span>
          <p>
            All the Study Materials related content upload & management will be
            accessible in this section. Like Adding Ebooks, Filter Categories,
            Deleting ebooks etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default Admin;
