import styles from "./Section5.module.css";
import NavLink from 'next/link';

const Section5 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["image-container"]}>
        <img className={styles['image']} src="https://youthincmag.com/wp-content/uploads/2018/05/study-material.jpg" />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles['header']}>GET HANDPICKED STUDY MATERIAL</h2>
          <p className={styles['description']}>
            Get best handpicked study materials from our website chosen by our experts. 
          </p>
          <button className={styles["button"]}><NavLink href="/study-materials">BUY NOW</NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
