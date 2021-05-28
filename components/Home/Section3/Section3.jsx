import styles from "./Section3.module.css";
import YouTube from "react-youtube";
import { useScrollPercentage } from "react-scroll-percentage";
import ReactPlayer from "react-player";
import { useState } from "react";

const Section3 = (props) => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const changePlayerHandler = (value) => {
    if (value !== isPlaying) {
      setIsPlaying((prevState) => !prevState);
    }
  };

  if (percentage > 0.3 && percentage < 0.8) {
    changePlayerHandler(true);
  } else {
    changePlayerHandler(false);
  }

  return (
    <div className={styles["section"]} ref={ref}>
      <div className={styles["text-container"]}>
        <div className={styles["text-container__box"]}>
          <h2 className={styles['header']}>1 ON 1 LIVE ONLINE TUTION</h2>
          <p className={styles['description']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            vitae quod illo aspernatur natus sunt officiis deserunt nostrum
            tenetur maiores corrupti sequi consectetur dignissimos, earum
            quisquam at minima! Fugiat, qui.
          </p>
          <button className={styles["button"]}>Learn More</button>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <div className={styles['video']}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8No-0n4Twbc"
            playing ={isPlaying}
            width = '100%'
            height = '100%'
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
