import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/" className={styles.link}>Главная</Link>
      <Link to="/stories" className={styles.link}>Рассказы</Link>
      <Link to="/gallery" className={styles.link}>Галерея</Link>
      <Link to="/about-me" className={styles.link}>Обо мне</Link>
    </div>
  );
};

export default Navigation;