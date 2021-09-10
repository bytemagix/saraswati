import styles from "./SelectBox.module.css";

const SelectBox = props => {
  return (
    <div className={styles["form-control"]}>
      <label className={styles["form-control__label"]}>{props.label}</label>
      <select
        onChange={props.onChange}
        value={props.value}
        className={styles["form-control__select"]}
      >
        {props.data.map(item => {
          return (
            <option key={item.cityId} value={item.cityId}>
              {item.city}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;