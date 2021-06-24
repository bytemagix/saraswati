import styles from "./Course.module.css";

const Course = (props) => {
  return (
    <>
    <div className={styles["course"]}>
      <div className={styles["info"]}>
        <span>{props.title}</span>
        <span>{props.subject}</span>
        <span>{props.std}</span>
        <span>Rs. {props.price}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["btn-book-now"]} onClick={props.onClick}>
          Book Now
        </button>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Course;
