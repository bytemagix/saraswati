import styles from "./InputBox2.module.css";

const InputBox2 = (props) => {
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
    </div>
  );
};

export default InputBox2;