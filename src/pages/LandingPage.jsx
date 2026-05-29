import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link to="/" className={styles.brand}>
              GRADUSY24
            </Link>
            <Link to="/app" className={styles.outlineButton}>
              OPEN APP
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <h1>
                  GRADUSY24
                  <br />
                  DIGITAL
                  <br />
                  SERVICE
                  <br />
                  FOR ADULT USERS
                </h1>
                <p>Quick access through the app. Clear flow. Private by default.</p>
                <Link to="/app" className={styles.solidButton}>
                  OPEN APPLICATION <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className={styles.heroArt} aria-hidden="true">
                <div className={styles.gridPattern} />
                <div className={styles.blockA} />
                <div className={styles.blockB} />
                <div className={styles.blockC} />
                <div className={styles.lineA} />
                <div className={styles.lineB} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.infoStrip} aria-label="verified access information">
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              <span>21+ ACCESS — AGE CHECK — PRIVATE DATA — APP ONLY — </span>
              <span>21+ ACCESS — AGE CHECK — PRIVATE DATA — APP ONLY — </span>
            </div>
          </div>
        </section>

        <section className={styles.minimalSection}>
          <div className={styles.container}>
            <div className={styles.minimalGrid}>
              <p className={styles.sectionIndex}>SECTION 01</p>
              <p className={styles.sectionText}>
                The platform provides direct app access for verified adult users with a simple and clear flow.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <h2>OPEN PLATFORM</h2>
              <p>Available only after age verification.</p>
              <Link to="/app" className={styles.ctaButton}>
                OPEN APP
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <span>GRADUSY24</span>
            <span>21+</span>
            <Link to="/privacy">PRIVACY</Link>
            <Link to="/offer">OFFER</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
