import styles from "./InputBox4.module.css";

const InputBox4 = (props) => {
  return (
    <div className={styles["input-box"]}>
      <label className={styles["label"]} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles["input"]}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      {props.hasError && <span className={styles['error-msg']}>{props.errorMsg}</span>}
    </div>
  );
};

export default InputBox4;