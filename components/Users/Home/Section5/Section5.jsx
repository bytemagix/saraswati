import styles from "./Section5.module.css";
import NavLink from "next/link";

const Section5 = (props) => {
  return (
    <div className={styles["section"]}>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles["header"]}>BOOK OUR EXPERT HOME TUTOR</h2>
          <p className={styles["description"]}>
            You can hire our expert home tutor avaialable in your city. Our
            tutor goes through special eligibility test before featuring in our
            website. Our Goal is to provide best eduction for our students. So,
            We don't compromise on quality.
          </p>
          <button className={styles["button"]}>
            <NavLink href="/home-tutor">Coming Soon</NavLink>
          </button>
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
