import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { userActions } from "../../../../store/slices/user-slice";
import NavLink from "next/link";
import { useRouter } from "next/router";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const submitFormHandler = () => {
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
    try {
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
        dispatch(
          userActions.login({
            emailId: data.email,
            localId: data.localId,
          })
        );

        localStorage.setItem("authToken", data.localId);
        localStorage.setItem("emailId", data.email);
      }
      console.log(data);
      router.push("/student-dashboard");
    } catch (err) {
      console.log(error);
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <div className={styles["sign-up"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Log In</span>
        </div>
        <hr />
        <div className={styles["main"]}>
          <div className={styles["form-section"]}>
            <form className={styles["form-controls"]}>
              <InputBox2
                label="Email"
                id="email"
                type="text"
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
              <InputBox2
                label="Password"
                id="password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />

              <div className={styles["login"]}>
                <span
                  className={styles["login-btn"]}
                  onClick={submitFormHandler}
                >
                  Login
                </span>
              </div>
            </form>
          </div>
          <div className={styles["external"]}>
            <div className={styles["message"]}>
              <span className={styles["message-title"]}>
                {" "}
                Don't have an account ?
              </span>
            </div>
            <div className={styles["signup"]}>
              <span className={styles["signup-btn"]}>
                <NavLink href="/signup">SignUp Now</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["background"]}></div>
    </div>
  );
};

export default Login;
