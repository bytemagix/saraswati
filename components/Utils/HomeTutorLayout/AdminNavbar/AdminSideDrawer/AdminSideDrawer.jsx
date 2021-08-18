import styles from "./AdminSideDrawer.module.css";
import NavLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { adminActions } from "../../../../../store/slices/admin-slice";

import {
  FaHome,
  FaTv,
  FaUser,
  FaBook,
  FaUserGraduate,
  FaIdBadge,
  FaFileDownload,
  FaGraduationCap,
  FaLock,
} from "react-icons/fa";

const AdminSideDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state) => state.adminSlice.authInfo);

  const logoutHandler = () => {
    dispatch(adminActions.logout());
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  return (
    <>
      <div className={styles["sidenav"]}>
        <div className={styles["menu"]}>
          <ul className={styles["menu-items"]}>
            <li>
              <span className={styles["icon"]}>
                <FaHome />
              </span>
              <NavLink href="/admin">Admin Home</NavLink>
            </li>

            <li>
              <span className={styles["icon"]}>
                <FaHome />
              </span>
              <NavLink href="/admin/manage-study-materials">
                Manage Study Materials
              </NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaTv />
              </span>
              <NavLink href="/admin/manage-online-class">
                Manage Online Class
              </NavLink>
            </li>
            <li>
              <span className={styles["icon"]}>
                <FaUser />
              </span>
              <NavLink href="/admin/enrollments">Enrollments</NavLink>
            </li>
          </ul>
        </div>

        <div onClick={logoutHandler} className={styles["list-item-logout"]}>
          <span className={styles["icon"]}>
            <FaLock />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default AdminSideDrawer;
