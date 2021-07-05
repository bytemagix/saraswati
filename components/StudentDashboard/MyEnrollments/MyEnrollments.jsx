import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./MyEnrollments.module.css";
import Enrollments from "./Enrollments/Enrollments";

const MyEnrollments = (props) => {
  return (
    <div className={styles["my-enrollments"]}>
      <div className={styles["header"]}>
        <span className={styles["header-title"]}>My Enrollments</span>
      </div>
      <div className={styles["enrollment-list"]}>
        <Enrollments />
      </div>
    </div>
  );
};

export default MyEnrollments;
