import Search from "../../UI/Search/Search";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
      <a href="/">
        <img className="logo"
          src="http://i.siteapi.org/QOHvUPfNqnlkxpmvHZdQWuFkPNk=/0x0:330x150/fit-in/430x0/filters:format(webp)/4b06315ef3f0841.ru.s.siteapi.org/logo/284ux5cm7exwc88g0c4g0kk0ssgwgw"
          alt="Бродяга Алан"
          height='35'
          width='112'
        />
      </a>
      </div>
      <Navigation />
      <Search />
      
      
    </div>
  );
};

export default Header;