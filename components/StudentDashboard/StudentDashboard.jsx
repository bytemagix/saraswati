import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./StudentDashboard.module.css";

const StudentDashboard = (props) => {
  const auth = useSelector((state) => state.userSlice.authInfo);
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.replace("/");
    }
  }, []);

  return <div className={styles["dashboard"]}>Student Dashboard</div>;
};

export default StudentDashboard;
