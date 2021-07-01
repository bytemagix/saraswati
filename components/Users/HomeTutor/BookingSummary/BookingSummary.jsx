import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./BookingSummary.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import TextAreaBox from "../../../Utils/UI/TextAreaBox/TextAreaBox";
import SendDataModal from "../../../Utils/UI/SendDataModal/SendDataModal";

const BookingSummary = (props) => {
  const bookingInfo = useSelector((state) => state.userSlice.bookHomeTutorInfo);

  const [studentName, setStudentName] = useState("");
  const [studentMobileNo, setStudentMobileNo] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [isDataSent, setIsDataSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Successfully Booked");

  const studentNameChangeHandler = (event) => {
    setStudentName(event.target.value);
  };

  const studentMobileNoChangeHandler = (event) => {
    setStudentMobileNo(event.target.value);
  };

  const studentEmailChangeHandler = (event) => {
    setStudentEmail(event.target.value);
  };

  const studentCityChangeHandler = (event) => {
    setStudentCity(event.target.value);
  };

  const studentAddressChangeHandler = (event) => {
    setStudentAddress(event.target.value);
  };

  const resetForm = () => {
    setStudentName("");
    setStudentMobileNo("");
    setStudentEmail("");
    setStudentCity("");
    setStudentAddress("");
  };

  const bookingHandler = (event) => {
    event.preventDefault();

    setIsDataSent(true);

    //Validation

    const formData = new FormData();
    formData.append("teacherId", bookingInfo.teacherId);
    formData.append("courseName", bookingInfo.title);
    formData.append("studentName", studentName);
    formData.append("mobileNo", studentMobileNo);
    formData.append("email", studentEmail);
    formData.append("city", studentCity);
    formData.append("address", studentAddress);

    sendData(formData);
  };

  const sendData = async (formdata) => {
    const res = await fetch(
      "https://saraswati-api.herokuapp.com/home-tutor/book-tutor",
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

  return (
    <div className={styles["booking"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span>Book Home Tutor</span>
        </div>
        <hr />
        <div className={styles["course-info"]}>
          <div className={styles["course-info__header"]}>
            <span>Course Infomation</span>
          </div>
          <span>{bookingInfo.title}</span>
          <span>{bookingInfo.name}</span>
          <span>{bookingInfo.subject}</span>
          <span>Rs. {bookingInfo.price}</span>
        </div>

        <div className={styles["student-info"]}>
          <span className={styles["student-info__header"]}>
            Student Infomation
          </span>
        </div>

        <div className={styles["form"]}>
          <form onSubmit={bookingHandler} className={styles["form-controls"]}>
            <InputBox
              label="Name"
              id="student-name"
              type="text"
              value={studentName}
              onChange={studentNameChangeHandler}
            />

            <InputBox
              label="Mobile No"
              id="student-mobileNo"
              type="text"
              value={studentMobileNo}
              onChange={studentMobileNoChangeHandler}
            />

            <InputBox
              label="Email Id"
              id="student-email"
              type="text"
              value={studentEmail}
              onChange={studentEmailChangeHandler}
            />

            <InputBox
              label="City"
              id="student-city"
              type="text"
              value={studentCity}
              onChange={studentCityChangeHandler}
            />

            <TextAreaBox
              label="Address"
              type="text"
              id="address"
              rows="4"
              value={studentAddress}
              onChange={studentAddressChangeHandler}
            />

            <div className={styles["actions"]}>
              <button type="submit">Book Tutor</button>
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

export default BookingSummary;
