import styles from "./Main.module.scss";

const VideoList = () => {
  return (
    <section className={styles.video}>
      <h2 className={styles.section__title}>Видео</h2>
      <div className={styles.video__iframes}>
        <iframe
          className={styles.video__iframe}
          src="https://www.youtube.com/embed/X3Cwn5V_Ba4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className={styles.video__iframe}
          src="https://www.youtube.com/embed/fERssYuo2MU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          className={styles.video__iframe}
          src="https://www.youtube.com/embed/R6_H6SQbcN8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoList;
