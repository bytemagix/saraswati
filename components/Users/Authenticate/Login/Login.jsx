import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import NavLink from "next/link";
import { useRouter } from "next/router";
import InputBox from "../../../Utils/UI/InputBox/InputBox";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const reqBody = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    const data = JSON.stringify(reqBody);
    console.log(data);
    userLogin(data);
  };

  const userLogin = async (formData) => {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOXb4C0jvnF_vSnf6JCUGk_0JmZ1_Lo4Q",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    if (data.idToken) {
      dispatch(userActions.login({
        emailId : data.emailId,
        localId : data.localId
      }));
    }
    console.log(data);
    router.push("/student-dashboard");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <div className={styles["login"]}>
      <div className={styles["card"]}>
        <form onSubmit={submitFormHandler} className={styles["form-controls"]}>
          <InputBox
            label="Email Id"
            id="email"
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />

          <InputBox
            label="Password"
            id="password"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />

          <div className={styles["actions"]}>
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className={styles["login"]}>
          <span className={styles["login-label"]}>Don't have an account?</span>
          <button>
            <NavLink href="/signup">Sign Up</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
