import styles from "./Section7.module.css";
import NavLink from 'next/link';

const Section7 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["image-container"]}>
        <img className={styles['image']} src="/images/tutor.jpg" />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles['header']}>JOIN US AS A HOME TUTOR</h2>
          <p className={styles['description']}>
            Want to join us as a Home Tutor? You just need to register yourself with us. just fill up a simple form. Once, approved your profile will be shown in our website. 
          </p>
          <button className={styles["button"]}><NavLink href="/home-tutor-dashboard">JOIN NOW</NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Section7;