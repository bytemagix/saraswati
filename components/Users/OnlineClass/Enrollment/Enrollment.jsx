import styles from "./Enrollment.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import TextAreaBox from "../../../Utils/UI/TextAreaBox/TextAreaBox";
import SendDataModal from "../../../Utils/UI/SendDataModal/SendDataModal";
import { baseUrl } from '../../../../constants/urls';
import { localUrl } from '../../../../constants/urls';

const Enrollment = (props) => {
  const router = useRouter();

  const [enteredName, setEnteredName] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPrevSchool, setEnteredPrevSchool] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [isDataSent, setIsDataSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Successfully Enrolled");

  const courseId = router.query.courseId;

  const courses = useSelector((state) => state.onlineClassSlice.courses);
  // const courseInfo = courses.find((item) => item.courseId === courseId);

  const courseInfo = props.data;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobileNoChangeHandler = (event) => {
    setEnteredMobileNo(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const prevSchoolChangeHandler = (event) => {
    setEnteredPrevSchool(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const enrollmentHandler = (event) => {
    event.preventDefault();

    setIsDataSent(true);

    //Validation
    console.log(enteredName);
    console.log(enteredMobileNo);
    console.log(enteredEmail);

    const formData = new FormData();
    formData.append("courseId", courseId);
    formData.append("courseTitle", courseInfo.title);
    formData.append("courseTutor", courseInfo.tutor);
    formData.append("courseDescription", courseInfo.description);
    formData.append("name", enteredEmail);
    formData.append("mobileNo", enteredMobileNo);
    formData.append("email", enteredEmail);
    formData.append("prevSchool", enteredPrevSchool);
    formData.append("address", enteredAddress);

    sendData(formData);
  };

  const sendData = async (formdata) => {
    const res = await fetch(
      `${baseUrl}/online-class/enroll-online-class`,
      {
        method: "POST",
        body: formdata,
      }
    );

    const data = await res.json();
    console.log(data);
    
    resetForm();
    setShowMessage(true);
    setTimeout(closeLoadingSpinner, 1500);
  };

  const closeLoadingSpinner = () => {
    setIsDataSent(false);
  };

  const resetForm = () => {
    setEnteredName("");
    setEnteredMobileNo("");
    setEnteredEmail("");
    setEnteredPrevSchool("");
    setEnteredAddress("");
  };

  return (
    <div className={styles["enrollment"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Enrollment Form</span>
        </div>
        <div>
          <hr />
        </div>
        <div className={styles["course-info"]}>
          <span className={styles["form-header-title"]}>
            Course Information
          </span>
          <span>{courseInfo.title}</span>
          <span>{courseInfo.tutor}</span>
          <span>{courseInfo.description}</span>
        </div>
        <div className={styles["form"]}>
          <div className={styles["form-header"]}>
            <span className={styles["form-header-title"]}>
              Student Infomation
            </span>
          </div>
          <form
            onSubmit={enrollmentHandler}
            className={styles["form-controls"]}
          >
            <InputBox
              label="Name"
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
            <InputBox
              label="Mobile No"
              id="mobileNo"
              type="number"
              value={enteredMobileNo}
              onChange={mobileNoChangeHandler}
            />

            <InputBox
              label="Email Id"
              id="email"
              type="text"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />

            <InputBox
              label="Previous School/College Name"
              id="prevschool"
              type="text"
              value={enteredPrevSchool}
              onChange={prevSchoolChangeHandler}
            />

            <TextAreaBox
              label="Parmanent Address"
              id="address"
              type="text"
              rows="4"
              value={enteredAddress}
              onChange={addressChangeHandler}
            />

            <div className={styles["actions"]}>
              <button type="submit" className={styles["btn-enroll"]}>
                Enroll Now
              </button>
            </div>
          </form>
        </div>

        {isDataSent && (
          <div className={styles["sending"]}>
            <SendDataModal showMessage={showMessage} message={message} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Enrollment;
