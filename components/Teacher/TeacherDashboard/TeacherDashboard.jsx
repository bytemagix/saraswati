import { useState } from "react";
import AddProfile from "../AddProfile/AddProfile";
import AddCourse from "../AddCourse/AddCourse";
import styles from "./TeacherDashboard.module.css";

const TeacherDashboard = (props) => {
  const [page, setPage] = useState("");

  const pageChangeHandler = (pageName) => {
    setPage(pageName);
  };

  let loadedPage;
  let classAddSubjectBtn = 'menu-item';
  let classAddBookBtn = 'menu-item';

  switch (page) {
    case "ADD_PROFILE":
      loadedPage = <AddProfile /> ;
      classAddSubjectBtn = 'menu-item__active';
      break;

      case "ADD_BOOK":
      loadedPage = <AddCourse/>;
      classAddBookBtn = 'menu-item__active';
      break;
  }

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["sidebar"]}>
        <button
          onClick={pageChangeHandler.bind(this, "ADD_PROFILE")}
          className={styles[classAddSubjectBtn]}
        >
          Add Profile
        </button>
        <button
          onClick={pageChangeHandler.bind(this, "ADD_BOOK")}
          className={styles[classAddBookBtn]}
        >
          Add Book
        </button>
      </div>
      <div className={styles["main"]}>{loadedPage}</div>
    </div>
  );
};

export default TeacherDashboard;
