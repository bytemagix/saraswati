import styles from "./Section4.module.css";

const Section4 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["image-container"]}>
        <img className={styles['image']} src="https://youthincmag.com/wp-content/uploads/2018/05/study-material.jpg" />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles['header']}>GET HANDCRAFTED STUDY MATERIAL</h2>
          <p className={styles['description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vitae quod illo aspernatur natus sunt officiis deserunt nostrum
            tenetur maiores corrupti sequi consectetur dignissimos, earum
            quisquam at minima! Fugiat, qui.
          </p>
          <button className={styles["button"]}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
