import styles from './TextAreaBox.module.css';

const TextAreaBox = props => {
    return (
        <div className={styles["text-box"]}>
          <label className={styles["label"]} htmlFor={props.id}>
            {props.label}
          </label>
          <textarea
            className={styles["textarea"]}
            type={props.type}
            id={props.id}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
}

export default TextAreaBox;