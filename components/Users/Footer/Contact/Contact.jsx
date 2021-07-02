import styles from "./Contact.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useState } from "react";
import FooterSpinner from '../../../Utils/UI/FooterSpinner/FooterSpinner';

const Contact = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isDataSent, setIsDataSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Successfully Sent. We will get back to you soon. Thank You");


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneNoChangeHandler = (event) => {
    setEnteredPhoneNo(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };


  const formSubmitHandler = (event) => {
    event.preventDefault();

     //Validation
     setIsDataSent(true);

     const formData = new FormData();
     formData.append("name", enteredName);
     formData.append("mobileNo", enteredPhoneNo);
     formData.append("email",enteredEmail);
     formData.append("message",enteredMessage);
     
     sendData(formData);

  }
  
  const sendData = async (formdata) => {
    const res = await fetch("https://saraswati-api.herokuapp.com/feedbacks/enquiry", {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    
    resetForm();
    setShowMessage(true);
    setTimeout(closeLoadingSpinner, 2000);
  }    

  const closeLoadingSpinner = () => {
    setIsDataSent(false);
    setShowMessage(false);
  };

  const resetForm = () => {
    setEnteredName("");
    setEnteredPhoneNo("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  return (
    <div className={styles['contact']}>
      <form onSubmit={formSubmitHandler}>
        <InputBox2
          label="Name"
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />

        <InputBox2
          label="Email"
          id="email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />

        <InputBox2
          label="Mobile No"
          id="phoneno"
          type="text"
          value={enteredPhoneNo}
          onChange={phoneNoChangeHandler}
        />

        <TextBox
          label="Message"
          id="message"
          type="text"
          value={enteredMessage}
          rows="4"
          onChange={messageChangeHandler}
        />

        <div className={styles["actions"]}>
          <button type="submit" className={styles["button"]}>Sumbit</button>
        </div>
      </form>

      {showMessage && <p className={styles['success-message']}>{message}</p>}

      {isDataSent && !showMessage && (
          <div className={styles["sending"]}>
            <FooterSpinner />
          </div>
        )}
    </div>
  );
};

export default Contact;
