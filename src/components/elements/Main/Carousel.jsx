import styles from "./Main.module.scss";
import React from "react";
import { useState, useEffect } from "react";

const Carousel = ({ carouselItems, buttonNextClick, buttonPreviousClick, ...rest }) => {
  const [active, setActive] = useState(0);
  let scrollInterval = null;

  useEffect(() => {
    if (buttonNextClick === false && buttonPreviousClick === false) {
      scrollInterval = setTimeout(() => {
        setActive((active + 1) % carouselItems.length);
      }, 6000);
      return () => clearTimeout(scrollInterval);
    }
  });

  useEffect(() => {
    if (buttonNextClick === true) {
      scrollInterval = setTimeout(() => {
        setActive((active + 1) % carouselItems.length);
      }, 0);
      return () => clearTimeout(scrollInterval);
    } else if(buttonPreviousClick === true) {
      scrollInterval = setTimeout(() => {
        setActive((active + 1) % carouselItems.length);
      }, 0);
      return () => clearTimeout(scrollInterval);
    }
  }, [buttonNextClick, buttonPreviousClick]);

  return (
    <div className={styles.main}>
      {carouselItems.map((item, index) => {
        const activeClass =
          active === index ? styles.carousel__item_visible : "";
        return React.cloneElement(item, {
          ...rest,
          key: index,
          className: `${styles.carousel__item} ${activeClass}`,
        });
      })}
    </div>
  );
};

export default Carousel;
