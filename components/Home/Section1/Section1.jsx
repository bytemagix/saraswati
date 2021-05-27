import styles from "./Section1.module.css";

const Section1 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles["header"]}>SARASWATI TUTORIALS</h2>
          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vitae quod illo aspernatur natus sunt officiis deserunt nostrum
            tenetur maiores corrupti sequi consectetur dignissimos, earum
            quisquam at minima! Fugiat, qui.
          </p>
          <button className={styles["button"]}>Learn More</button>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img
          src="https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg"
          className={styles["image"]}
        />
      </div>
    </div>
  );
};

export default Section1;
