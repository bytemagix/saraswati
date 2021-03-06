import styles from "./AddAgeGroup.module.css";
import InputBox2 from "../../../../Utils/UI/InputBox2/InputBox2";
import { useState } from "react";
import { baseUrl, localUrl } from "../../../../../constants/urls";
import { useSelector } from "react-redux";

const AddAgeGroupModal = (props) => {
  const auth = useSelector(state => state.adminSlice.authInfo);
  const [enteredCategory, setEnteredCategory] = useState("");

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Validation
    const formData = new FormData();
    formData.append('token',auth.token);
    formData.append("ageGroup",enteredCategory);

    addCategory(formData);
  };

  const addCategory = async (formdata) => {
    const res = await fetch(`${baseUrl}/admin/add-age-group`,{
      method : "POST",
      body : formdata,
    });

    const data = await res.json();
    props.onClose();
  }

  return (
    <div className={styles["checkout"]}>
      <div className={styles["card"]}>
        <header className={styles["modal-header"]}>
          Add Age Group
        </header>
        <div><hr /></div>
        <div className={styles['form-controls']}>
          <form onSubmit={formSubmitHandler}>
            <input type="text" id="category" value={enteredCategory} onChange={categoryChangeHandler} className={styles['input']} />
            <div className={styles["actions"]}>
              <button type="submit" className={styles['button-order']}>Add Age Group</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
    </div>
  );
};
export default AddAgeGroupModal;
