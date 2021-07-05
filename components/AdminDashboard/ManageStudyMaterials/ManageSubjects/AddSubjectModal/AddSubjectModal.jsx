import styles from "./AddSubjectModal.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import { useState } from "react";
import { baseUrl, localUrl } from "../../../../../constants/urls";

const AddSubjectModal = (props) => {
  const [enteredSub, setEnteredSub] = useState("");

  const subChangeHandler = (event) => {
    setEnteredSub(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Validation
    const formData = new FormData();
    formData.append("title",enteredSub);

    addSubject(formData);
  };

  const addSubject = async (formdata) => {
    const res = await fetch(`${localUrl}/study-materials/add-subject`,{
      method : "POST",
      body : formdata
    });

    const data = await res.json();
    console.log(data);
    props.onClose();
  }

  return (
    <div className={styles["checkout"]}>
      <div className={styles["card"]}>
        <header className={styles["modal-header"]}>
          Add Subject
        </header>
        <div><hr /></div>
        <div className={styles['form-controls']}>
          <form onSubmit={formSubmitHandler}>
            <input type="text" id="sub" value={enteredSub} onChange={subChangeHandler} className={styles['input']} />
            <div className={styles["actions"]}>
              <button type="submit" className={styles['button-order']}>Add Subject</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
    </div>
  );
};
export default AddSubjectModal;
