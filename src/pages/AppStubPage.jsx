import { Link } from 'react-router-dom';
import { appLinks } from '../content/siteContent';
import styles from './AppStubPage.module.css';

function AppStubPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <p className={styles.kicker}>Gradusy24 / приложение</p>
        <h1>Скачивание приложения</h1>
        <p>
          Приложение помогает выбрать товары, оформить заказ, оплатить удобным способом и отслеживать доставку по
          понятным статусам. Доступ к сервису открывается после проверки города и пользовательских данных.
        </p>

        <div className={styles.actions}>
          {appLinks.map((link) => (
            <a key={link.label} className={styles.button} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <Link to="/" className={styles.button}>
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppStubPage;
