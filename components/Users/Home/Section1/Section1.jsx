import styles from "./Section1.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem/SliderItem";
import { useEffect, useState } from "react";
import WhiteCircleLoader from "../../../Utils/UI/WhiteCircleLoader/WhiteCircleLoader";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Section1 = (props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = async () => {
    const res = await fetch(
      "https://saraswati-45e10-default-rtdb.firebaseio.com/Posters.json"
    );
    const data = await res.json();

    console.log(data);

    let posters = [];

    for (const key in data) {
      const poster = data[key];
      posters.push(poster);
    }

    setImages(posters);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={styles["section"]}>
      {isLoading && (
        <div className={styles["loading"]}>
          <WhiteCircleLoader />
        </div>
      )}
      {!isLoading && (
        <Slider {...settings} className={styles["slider"]}>
          {images.map((item) => (
            <SliderItem
              key={item.posterId}
              posterUrl={item.posterUrl}
              redirectUrl={item.redirectUrl}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Section1;
