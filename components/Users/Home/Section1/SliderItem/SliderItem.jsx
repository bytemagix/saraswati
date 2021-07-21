import styles from "./SliderItem.module.css";
import NavLink from "next/link";

const SliderItem = (props) => {
  if (props.redirectUrl !== "None") {
    return (
      <div className={styles["slider-item"]}>
        <NavLink href={props.redirectUrl}>
          <img src={props.posterUrl} alt="poster" />
        </NavLink>
      </div>
    );
  }

  return (
    <div className={styles["slider-item"]}>
      <img src={props.posterUrl} alt="poster" />
    </div>
  );
};

export default SliderItem;
