import { Link } from 'react-router-dom';
import styles from './LegalPage.module.css';

function OfferPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>
          BACK TO LANDING
        </Link>

        <section className={styles.panel}>
          <p className={styles.kicker}>LEGAL</p>
          <h1 className={styles.title}>Публичная оферта</h1>
          <p className={styles.text}>
            Использование сервиса означает согласие пользователя с условиями оферты, правилами доступа и
            возрастными ограничениями. Актуальная редакция условий размещается на этой странице и применяется с
            момента публикации.
          </p>
        </section>
      </div>
    </div>
  );
}

export default OfferPage;
