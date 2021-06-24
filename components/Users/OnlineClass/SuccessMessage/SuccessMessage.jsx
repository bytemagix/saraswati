import styles from "./SuccessMessage.module.css";
import NavLink from 'next/link';

const SuccessMessage = (props) => {
  return (
    <div className={styles["success-message"]}>
      <span className={styles['message']}>
        Successfully Enrolled for the course. Further Details will be
        communicated via registered Email Id & Mobile No
      </span>
      <span className={styles['home-link']}><NavLink href="/">Home</NavLink></span>
    </div>
  );
};

export default SuccessMessage;
