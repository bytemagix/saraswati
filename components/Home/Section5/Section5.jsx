import styles from "./Section5.module.css";

const Section5 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles["header"]}>BOOK OUR EXPERT HOME TUTOR</h2>
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
          className={styles["image"]}
          src="https://www.justbaazaar.com/wp-content/uploads/2019/11/got-get-our-tutors-dwarka-more-delhi-home-tutors-8gmezfx7lq.jpg"
        />
      </div>
    </div>
  );
};

export default Section5;
