import styles from "./Main.module.scss";
import photoArrow from "../../images/r4444.png";
import { useState } from "react";
import videoLink from "../../UI/data2.js";
import { useEffect } from "react";

const VideoList = () => {
  //const [showList, setShowList] = ([videoLink]);
 const [showVideoList, setShowVideoList] = useState(3);
 const [addShowVideoList, setAddShowVideoList] = useState(3)
  //console.log(showList)
  //const [videoCards, setVideoCards] = useState([videoLink]);
 // const [showVideoCards, getShowVideoCards] = useState(3);

 useEffect(() => {
   
    console.log('gdfdf')

  
  }, [])
 

  const handleMoreButton = () => {
    
    if (videoLink.length - showVideoList <= 0) {
      setShowVideoList(showVideoList - addShowVideoList)
    } else {
      setShowVideoList(showVideoList + addShowVideoList);
    }
  }

  document.addEventListener('touchstart', handleMoreButton, {passive: true});
  return (
    <section className={styles.video}>
      <h2 className={styles.section__title}>Видео</h2>
      <div className={styles.video__iframes}>
      { 
      videoLink.slice(0, showVideoList).map((element) => {
        return (<iframe
          className={styles.video__iframe}
          src={`https://www.youtube.com/embed/${element.link}`}
          key={element.id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          
        ></iframe>)
      })}
      </div>
      <button type="button" className={showVideoList <= videoLink.length ? `${styles.buttonMore}` : `${styles.buttonLess}`} onClick={handleMoreButton}></button>
    </section>
  );
};

export default VideoList;
