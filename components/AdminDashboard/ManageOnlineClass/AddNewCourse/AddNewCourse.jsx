import styles from "./AddNewCourse.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useState } from "react";
import {localUrl, baseUrl} from '../../../../constants/urls';

const AddNewCourse = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTutor, setEnteredTutor] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredFee, setEnteredFee] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const tutorChangeHandler = (event) => {
    setEnteredTutor(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const feeChangeHandler = (event) => {
    setEnteredFee(event.target.value);
  }

  const formSubmitHandler = (event) => {
      event.preventDefault();

      // Validation

      const formData = new FormData();
      formData.append('courseTitle',enteredTitle);
      formData.append('courseTutor',enteredTutor);
      formData.append('courseFee',enteredFee);
      formData.append('courseDescription',enteredDescription);

      addCourse(formData);
  }

  const addCourse = async (formdata) => {
      const res = await fetch(`${baseUrl}/online-class/addnew-online-course`,{
          method : "POST",
          body : formdata,
      });

      const data = await res.json();
      console.log(data);

      resetForm();
  }

  const resetForm = () => {
      setEnteredTitle("");
      setEnteredTutor("");
      setEnteredDescription("");
  }

  return (
    <div className={styles["add-new-course"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Add New Course</span>
        </div>
        <hr />
        <div className={styles["form"]}>
          <form onSubmit={formSubmitHandler}>
            <InputBox2
              label="Course Title"
              id="title"
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
            <InputBox2
              label="Course Tutor"
              id="tutor"
              type="text"
              value={enteredTutor}
              onChange={tutorChangeHandler}
            />
             <InputBox2
              label="Course Fee"
              id="fee"
              type="number"
              value={enteredFee}
              onChange={feeChangeHandler}
            />

            <TextBox
              label="Course Description"
              id="description"
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
            <div className={styles['actions']}>
                <button type="submit" className={styles['submit-btn']}>Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourse;
