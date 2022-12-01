import styles from "./Main.module.scss";
//import photo from "../../images/film7.jpg";
import { Link } from "react-router-dom";
import { storiesData } from "../../UI/data";

const NewsCard = ({storie}) => {
  return (
    <li>
      <img className={styles.card__image} src={storie.photo} alt="photo"></img>
      <div>
        
        <h2>{storie.name}</h2>
        <p className={styles.card__text}>{storie.text}</p>
        <Link className={styles.link}>Читать</Link>
      </div>
    </li>
  );
};
export default NewsCard;
