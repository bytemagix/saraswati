import styles from "./SelectSubjectBox.module.css";

const SelectSubjectBox = props => {
  console.log(props.data, "In Select Subject Box");
  return (
    <div className={styles["select-box"]}>
      <label className={styles["select-box__label"]}>{props.label}</label>
      <select
        onChange={props.onChange}
        value={props.value}
        className={styles["select-box__select"]}
      >
        {props.data.map(item => {
          return (
            <option key={item.subId} value={item.subId}>
              {item.subject}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectSubjectBox;