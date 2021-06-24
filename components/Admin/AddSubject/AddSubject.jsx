import { useRef } from "react";
import styles from "./AddSubject.module.css";

const AddSubject = (props) => {
  const titleRef = useRef();

  const addSubHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", titleRef.current.value);

    sendData(formData);
  };

  const sendData = async (formdata) => {
    const res = await fetch("/api/addsubject", {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles["add-subject"]}>
      <div className={styles["card"]}>
        <h2 className={styles["header"]}>Add Subject</h2>
        <div className={styles["divider"]}>
          <hr />
        </div>
        <form onSubmit={addSubHandler} className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label className={styles["form-control__label"]}>Title</label>
            <input type="text" className={styles["form-control__input"]} ref={titleRef} />
          </div>
          <div className={styles["form-actions"]}>
            <button type="submit" className={styles["add-book__button"]}>
              Add Subject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubject;
