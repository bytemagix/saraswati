import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AdminLogin.module.css";
import { adminActions } from "../../store/slices/admin-slice";
import NavLink from "next/link";
import { useRouter } from "next/router";
import InputBox2 from "../Utils/UI/InputBox2/InputBox2";
import FooterSpinner from "../Utils/UI/FooterSpinner/FooterSpinner";
import WhiteCircleLoader from "../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";
import { localUrl } from '../../constants/urls';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const submitFormHandler = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('email',enteredEmail);
    formData.append('password',enteredPassword);

    //API
    const res = await fetch(`${localUrl}/admin/login`,{
      method : "POST",
      body : formData
    });

    const data = await res.json();
    console.log(data);
    setIsLoading(false);

    if(data.token){
      dispatch(adminActions.login(data.token));
    }else{
      setIsError(true);
      setError("UnAuthorized");
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
                id="emailId"
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
        </div>

        {isError && (
          <div>
            <p className={styles["error-message"]}> LOGIN FAILED : {error} </p>
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

export default Login;