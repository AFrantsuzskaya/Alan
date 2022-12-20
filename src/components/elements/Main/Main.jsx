import Carousel from "./Carousel";
import styles from "./Main.module.scss";
import { useState } from "react";
import { DATA } from "../../UI/data";
import { useEffect } from "react";
import NewsCardList from "./NewsCardList";
import VideoList from "./VideoList";

const Main = () => {
  const [buttonNext, setButtonNext] = useState(false);
  const [buttonPrevious, setButtonPrevious] = useState(false);

  function handleClickButtonPrevious() {
    setButtonPrevious(true);
    setTimeout(() => {
      setButtonPrevious(false);
    }, 500);
  }

  function handleClickButtonNext() {
    setButtonNext(true);
    setTimeout(() => {
      setButtonNext(false);
    }, 500);
  }

  return (
    <div className={styles.main__box}>
      <div className={styles.wrapper}>
       {/* <ul>
          <li>
            <a
              title="YouTube"
              className={styles.link_youtube}
              href="https://www.youtube.com/channel/UCjLy1PiPdIX3MhyIOnaHEFA?view_as=subscriber"
            ></a>
          </li>
          <li>
            <a title="Связаться" className={styles.link_email}></a>
          </li>
          <li>
            <a title="Написать отзыв" className={styles.link_comment}></a>
          </li>
       </ul>*/}
       <div className={styles.arrows}>
       <button
          type="button"
          className={`${styles.arrow} ${styles.arrow_left}`}
          href="#link"
          onClick={handleClickButtonPrevious}
        >
          <svg
            className="arrow-circle-icon"
            
            width="30"
            height="32"
            viewBox="0 0 10 9"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="0.5"
              strokeLinejoin="round"
            >
              <path
                className="arrow-circle-icon--arrow"
                d="M9.581,9.000 L9.997,8.606 L5.836,4.500 L9.997,0.394 L9.581,0.000 L5.003,4.500 L9.581,9.000 Z"
                //d="M13.000,2.000 L2.000,7.500 L13.000,13.000 L2.000,7.500 Z"

              ></path>
            </g>
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrow_right}`}
          href="#link"
          onClick={handleClickButtonNext}
        >
          <svg
            className="arrow-circle-icon"
            
            width="30"
            height="32"
            viewBox="0 0 10 9"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="0.5"
              strokeLinejoin="round"
            >
              <path
                className="arrow-circle-icon--arrow"
                d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
              ></path>
            </g>
          </svg>
        </button>
        </div>
        <Carousel
          buttonNextClick={buttonNext}
          buttonPreviousClick={buttonPrevious}
          carouselItems={[
            <div
              id="1"
              style={{ backgroundImage: `url(${DATA[1].photos})` }}
            ></div>,
            <div
              id="2"
              style={{ backgroundImage: `url(${DATA[0].photos})` }}
            ></div>,
            <div
              id="3"
              style={{ backgroundImage: `url(${DATA[2].photos})` }}
            ></div>,
          ]}
        />
      </div>
      <NewsCardList />
      <VideoList />
    </div>
  );
};

export default Main;
