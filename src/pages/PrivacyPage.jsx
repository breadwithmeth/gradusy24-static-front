import { Link } from 'react-router-dom';
import styles from './LegalPage.module.css';

function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>
          BACK TO LANDING
        </Link>

        <section className={styles.panel}>
          <p className={styles.kicker}>LEGAL</p>
          <h1 className={styles.title}>Политика конфиденциальности</h1>
          <p className={styles.text}>
            Мы обрабатываем только данные, необходимые для работы сервиса и проверки доступа. Контактные и
            технические данные не передаются третьим лицам без законных оснований или согласия пользователя.
            Пользователь может запросить уточнение, обновление или удаление данных через контакты сервиса.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPage;
