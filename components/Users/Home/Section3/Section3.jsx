import styles from "./Section3.module.css";
import { useScrollPercentage } from 'react-scroll-percentage';
import { useState } from "react";
import NavLink from "next/link";

const Section3 = (props) => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0
  });

  const [titleClass, setTitleClass] = useState(false);

  const animateHandler = (value) => {
    if (value !== titleClass) {
      setTitleClass((prevState) => !prevState);
    }
  }

  if(percentage > 0.3 && percentage < 0.8){
    animateHandler(true)
  }else{
    animateHandler(false);
  }

  let titleClasses;
  if(titleClass){
    titleClasses = 'title';
  }else{
    titleClasses = 'title animate'
  }

  return (
    <div className={styles["section"]} ref={ref}>
      <div className={styles["image-container"]}>
        <img className={styles['image']} src="https://www.torsh.co/wp-content/uploads/2019/12/classroom-observation.jpg" />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles['header']}>VISIT OUR COACHING CENTRE</h2>
          <p className={styles['description']}>
           Our Coaching institue are currently avaialable in Mangaldai & Guwahati.
          </p>
          <button className={styles["button"]}><NavLink href="/classroom-courses">See Address</NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
