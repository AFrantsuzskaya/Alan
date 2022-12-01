import NewsCard from "./NewsCard";
import styles from "./Main.module.scss";
import { storiesData } from "../../UI/data";
const NewsCardList = ({ newsCards }) => {
  return (
    <section className={styles.cardslist__box}>
      <ul>{storiesData.map((element) => {
        return (<NewsCard 
        key={element.id}
        storie={element}/>)
      })}
      </ul>
    </section>
  );
};

export default NewsCardList;
