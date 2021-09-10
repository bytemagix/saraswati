import styles from "./AddressBox.module.css";

const AddressBox = props => {
  return (
    <div className={styles["address-box"]}>
      <label className={styles["label"]}>{props.label}</label>
      <textarea
        className={styles["text-input"]}
        rows="6"
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default AddressBox;