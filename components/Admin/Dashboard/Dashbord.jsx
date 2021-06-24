import { useState } from "react";
import AddBook from "../AddBook/AddBook";
import AddSubject from "../AddSubject/AddSubject";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  const [page, setPage] = useState("");

  const pageChangeHandler = (pageName) => {
    setPage(pageName);
  };

  let loadedPage;
  let classAddSubjectBtn = 'menu-item';
  let classAddBookBtn = 'menu-item';

  switch (page) {
    case "ADD_SUBJECT":
      loadedPage = <AddSubject /> ;
      classAddSubjectBtn = 'menu-item__active';
      break;

      case "ADD_BOOK":
      loadedPage = <AddBook />;
      classAddBookBtn = 'menu-item__active';
      break;
  }

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["sidebar"]}>
        <button
          onClick={pageChangeHandler.bind(this, "ADD_SUBJECT")}
          className={styles[classAddSubjectBtn]}
        >
          Add Subject
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

export default Dashboard;
