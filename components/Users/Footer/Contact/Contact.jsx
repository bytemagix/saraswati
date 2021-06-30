import styles from "./Contact.module.css";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import TextBox from "../../../Utils/UI/TextBox/TextBox";
import { useState } from "react";

const Contact = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

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

  return (
    <div className={styles['contact']}>
      <form>
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
          <button className={styles["button"]}>Sumbit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
