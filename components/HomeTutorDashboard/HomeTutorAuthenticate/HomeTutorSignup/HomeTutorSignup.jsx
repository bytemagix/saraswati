import { useRef, useState } from "react";
import styles from "./HomeTutorSignup.module.css";
import NavLink from "next/link";
import InputBox2 from "../../../Utils/UI/InputBox2/InputBox2";
import { useDispatch } from "react-redux";
import { homeTutorUserActions } from "../../../../store/slices/home-tutor-user-slice";
import { useRouter } from "next/router";
import WhiteCircleLoader from "../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const HomeTutorSignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();

  const submitFormHandler = () => {
    setIsLoading(true);
    const reqBody = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    const data = JSON.stringify(reqBody);
    console.log(data);
    signUp(data);
  };

  const signUp = async (formData) => {
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOXb4C0jvnF_vSnf6JCUGk_0JmZ1_Lo4Q",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.error) {
        setIsError(true);
        setError(data.error.message);
      } else {
        if (data.idToken) {
          dispatch(
            homeTutorUserActions.login({
              emailId: data.email,
              localId: data.localId,
            })
          );

          localStorage.setItem("homeTutorId", data.localId);
          localStorage.setItem("homeTutorEmail", data.email);
        }
        router.replace("/home-tutor-dashboard");
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
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
          <span className={styles["header-title"]}>Home Tutor Sign Up</span>
        </div>
        <hr />
        <div className={styles["main"]}>
          <div className={styles["form-section"]}>
            <form className={styles["form-controls"]}>
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
                label="Password"
                id="password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />

              <div className={styles["signup"]}>
                <span
                  className={styles["signup-btn"]}
                  onClick={submitFormHandler}
                >
                  Sign Up
                </span>
              </div>
            </form>
          </div>
          <div className={styles["external"]}>
            <div className={styles["message"]}>
              <span className={styles["message-title"]}>
                Already Have an account ?
              </span>
            </div>
            <div className={styles["login"]}>
              <span className={styles["login-btn"]}>
                <NavLink href="/home-tutor-dashboard">Login Now</NavLink>
              </span>
            </div>
          </div>
        </div>

        {isError && (
          <div>
            <p className={styles["error-message"]}> SIGNUP FAILED : {error} </p>
          </div>
        )}

        {isLoading && (
          <div className={styles["loading"]}>
            <WhiteCircleLoader />
          </div>
        )}
      </div>
      <div className={styles["background"]}></div>
    </div>
  );
};

export default HomeTutorSignUp;