import styles from "./SelectCityBox.module.css";

const SelectCityBox = props => {
  console.log(props.data, "In Select City Box");
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
            <option key={item.cityId} value={item.cityId}>
              {item.city}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCityBox;