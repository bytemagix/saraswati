import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { adminActions } from '../../../store/reducers/admin-reducer';

const Login = () => {

    const dispatch = useDispatch();
    
    const formSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(adminActions.login());
    }

  return (
    <div className={styles["login"]}>
      <div className={styles["card"]}>
        <h2>Admi Login</h2>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>User Name</label>
            <input type="text" />
          </div>
          <div>
            <label>PassWord</label>
            <input type="password" />
          </div>
          <div className={styles["actions"]}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
