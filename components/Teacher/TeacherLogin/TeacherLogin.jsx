import { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./TeacherLogin.module.css";
import { teacherAuthActions } from '../../../store/reducers/teacher-auth';

const TeacherLogin = props => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const reqBody = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const data = JSON.stringify(reqBody);
    console.log(data);
    signUp(data);
  };

  const signUp = async (formData) => {
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
    if(data.idToken){
      dispatch(teacherAuthActions.login(data.localId));
    }
    console.log(data);
  };

  return (
    <div className={styles["sign-up"]}>
      <div className={styles["card"]}>
        <form onSubmit={submitFormHandler} className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label>Email</label>
            <input type="text" ref={emailRef} />
          </div>
          <div className={styles["form-control"]}>
            <label>Password</label>
            <input type="password" ref={passwordRef} />
          </div>
          <div className={styles["actions"]}>
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className={styles["login"]}>
          <span className={styles["login-label"]}>
            Don't have an account?
          </span>
          <button className={styles["btn-login"]} onClick={props.onClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
