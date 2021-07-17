import styles from "./ButtonClear.module.css";

const ButtonClear = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={styles["button"]}
    >
      {props.title}
    </button>
  );
};

export default ButtonClear;
