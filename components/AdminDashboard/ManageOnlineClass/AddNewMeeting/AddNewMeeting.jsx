import styles from "./AddNewMeeting.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useState } from "react";
import {localUrl, baseUrl} from '../../../../constants/urls';

const AddNewMeeting = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTutor, setEnteredTutor] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const tutorChangeHandler = (event) => {
    setEnteredTutor(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const formSubmitHandler = (event) => {
      event.preventDefault();

      // Validation

      const formData = new FormData();
      formData.append('courseTitle',enteredTitle);
      formData.append('courseTutor',enteredTutor);
      formData.append('courseDescription',enteredDescription);

      addCourse(formData);
  }

  const addCourse = async (formdata) => {
      const res = await fetch(`${localUrl}/online-class/addnew-online-course`,{
          method : "POST",
          body : formdata,
      });

      const data = await res.json();

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
              label="Meeting Id"
              id="meetingId"
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

export default AddNewMeeting;