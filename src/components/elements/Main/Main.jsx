import Carousel from "./Carousel";
import styles from "./Main.module.scss";
import { useState } from "react";
import { DATA } from "../../UI/data";
import { useEffect } from "react";
import NewsCardList from "./NewsCardList";
import VideoList from "./VideoList";

const Main = () => {
  const [buttonNext, setButtonNext] = useState(false);

  function handleClickButtonNext() {
    setButtonNext(true);
    setTimeout(() => {
      setButtonNext(false);
    }, 500);
  }

  return (
    <div className={styles.main__box}>
      <div className={styles.wrapper}>
        <ul>
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
        </ul>
        <button
          type="button"
          className={styles.arrow}
          href="#link"
          onClick={handleClickButtonNext}
        >
          <svg
            className="arrow-circle-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="32"
            viewBox="0 0 20 9"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              {/*<circle class="arrow-circle-iconcircle" cx="16" cy="16" r="15.12"></circle>*/}
              <path
                className="arrow-circle-icon--arrow"
                d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
              ></path>
            </g>
          </svg>
        </button>
        <Carousel
          buttonNextClick={buttonNext}
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
