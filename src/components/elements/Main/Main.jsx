import styles from "./Main.module.scss";
import { useState } from "react";
import { DATA } from "../../UI/data";

const Main = () => {
  console.log(DATA[0].photos);
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a
            title="YouTobe"
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
      <a className={styles.arrow} href="#link">
        <svg
          class="arrow-circle-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="32"
          viewBox="0 0 20 9"
        >
          <g
            fill="none"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linejoin="round"
          >
            {/*<circle class="arrow-circle-iconcircle" cx="16" cy="16" r="15.12"></circle>*/}
            <path
              class="arrow-circle-icon--arrow"
              d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
            ></path>
          </g>
        </svg>
      </a>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${DATA[1].photos})` }}
      />
      
    </div>
  );
};

export default Main;
