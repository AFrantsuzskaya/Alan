import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/*<div>
        <a href="/">
        <img className={styles.logo}
          src="http://i.siteapi.org/QOHvUPfNqnlkxpmvHZdQWuFkPNk=/0x0:330x150/fit-in/430x0/filters:format(webp)/4b06315ef3f0841.ru.s.siteapi.org/logo/284ux5cm7exwc88g0c4g0kk0ssgwgw"
          alt="Бродяга Алан"
        />
    </a>
      </div>*/}
      <div className={styles.footer__copyrightBox}>
        <p className={styles.footer__copyright}>© 2014-2022 Бродяга Алан</p>
        <p className={styles.footer__copyright}>Страница о путешествиях</p>
      </div>
      <div className={styles.footer__links}>
      <ul>
          <li>
            <a
              title="YouTube"
              className={styles.link_youtube}
              href="https://www.youtube.com/channel/UCjLy1PiPdIX3MhyIOnaHEFA?view_as=subscriber"
            >YouTube</a>
          </li>
          <li>
            <a title="Связаться" className={styles.link_email}>E-mail</a>
          </li>
          <li>
            <a title="Написать отзыв" className={styles.link_comment}>Комментарии</a>
          </li>
       </ul>
    </div>
    </div>
    
  );
};

export default Footer;
