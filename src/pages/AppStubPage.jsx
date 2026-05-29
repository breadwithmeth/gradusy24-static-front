import { Link } from 'react-router-dom';
import styles from './AppStubPage.module.css';

function AppStubPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <p className={styles.kicker}>GRADUSY24 / APP</p>
        <h1>APPLICATION ENTRY POINT</h1>
        <p>Stub route for /app. Verified access flow can be integrated here.</p>
        <Link to="/" className={styles.button}>
          BACK TO LANDING
        </Link>
      </div>
    </div>
  );
}

export default AppStubPage;
