import styles from "./NoProfileModal.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import { useEffect, useState } from "react";
import { baseUrl, localUrl } from "../../../../../constants/urls";
import { useSelector } from "react-redux";

const NoProfileModal = (props) => {
 
  return (
    <div className={styles["checkout"]}>
      <div className={styles["card"]}>
        <header className={styles["modal-header"]}>No Profile Added</header>
        <div>
          <hr />
        </div>
        <div>
          <p>No Profile Information added yet. You need to fillup profile Information first</p>
        </div>
      </div>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
    </div>
  );
};
export default NoProfileModal;