import styles from "./Section2.module.css";
import { useScrollPercentage } from 'react-scroll-percentage';
import { useState } from "react";

const Section2 = (props) => {
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vitae quod illo aspernatur natus sunt officiis deserunt nostrum
            tenetur maiores corrupti sequi consectetur dignissimos, earum
            quisquam at minima! Fugiat, qui.
          </p>
          <button className={styles["button"]}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
