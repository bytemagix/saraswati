import styles from "./AddMeetingModal.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useState } from "react";

const AddMeetingModal = (props) => {
    const [enteredMeetingId, setEnteredMeetingId] = useState("");
    const [enteredMeetingPassword, setEnteredMeetingPassword] = useState("");
    const [enteredTime, setEnteredTime] = useState("");
    const [enteredZoomLink, setEnteredZoomLink] = useState("");

    const meetingIdChangeHandler = (event) =>{
        setEnteredMeetingId(event.target.value);
    }

    const meetingPasswordChangeHandler = (event) =>{
        setEnteredMeetingPassword(event.target.value);
    }

    const meetingTimeChangeHandler = (event) =>{
        setEnteredTime(event.target.value);
    }

    const zoomlinkChangeHandler = (event) =>{
        setEnteredZoomLink(event.target.value);
    }

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["checkout"]}>
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
              value={enteredMeetingId}
              onChange={meetingIdChangeHandler}
            />

            <InputBox2
              label="Meeting Password"
              id="meetingpass"
              type="text"
              value={enteredMeetingPassword}
              onChange={meetingPasswordChangeHandler}
            />

              <InputBox2
              label="Meeting Time"
              id="meetingtime"
              type="text"
              value={enteredTime}
              onChange={meetingTimeChangeHandler}
            />

            <TextBox
              label="Zoom Link"
              id="zoomlink"
              type="text"
              value={enteredZoomLink}
              onChange={zoomlinkChangeHandler}
            />
            <TextBox
              label="Zoom Link"
              id="zoomlink"
              type="text"
              value={enteredZoomLink}
              onChange={zoomlinkChangeHandler}
            />
            <TextBox
              label="Zoom Link"
              id="zoomlink"
              type="text"
              value={enteredZoomLink}
              onChange={zoomlinkChangeHandler}
            />
            <TextBox
              label="Zoom Link"
              id="zoomlink"
              type="text"
              value={enteredZoomLink}
              onChange={zoomlinkChangeHandler}
            />
            <div className={styles["actions"]}>
              <button type="submit" className={styles["submit-btn"]}>
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
    </div>
  );
};
export default AddMeetingModal;
