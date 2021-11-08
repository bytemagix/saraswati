import styles from "./InputBox3.module.css";

const InputBox3 = props => {
  return (
    <div className={styles["input-box"]}>
      <span className={styles["label"]}>{props.label}</span>
      <input
        type={props.type}
        id={props.id}
        className={styles["input"]}
        value={props.value}
        onChange={props.onChange}
      />
      {props.hasError && <p className={styles['error-msg']}>{props.errorMsg}</p>}
    </div>
  );
};

export default InputBox3;
