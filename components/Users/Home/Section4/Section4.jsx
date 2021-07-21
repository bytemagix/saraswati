import styles from "./Section4.module.css";
import YouTube from "react-youtube";
import { useScrollPercentage } from "react-scroll-percentage";
import ReactPlayer from "react-player";
import { useState } from "react";
import NavLink from "next/link";

const Section4 = (props) => {
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
          <h2 className={styles["header"]}>Online Classes</h2>
          <p className={styles["description"]}>
            We also provide online classes. Get yourself enrolled to our online
            classes batch & Enjoy the experience of learning from anywhere from
            our highly experienced faculty.
          </p>
          <button className={styles["button"]}>
            <NavLink href="/online-class">Enroll Today</NavLink>
          </button>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <div className={styles["video"]}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8No-0n4Twbc"
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
