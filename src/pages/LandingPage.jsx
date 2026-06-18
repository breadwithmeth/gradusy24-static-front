import { Link } from 'react-router-dom';
import {
  AllPagesCta,
  AppDownloadButtons,
  PageBrief,
  SiteFooter,
  SiteHeader
} from '../components/CorporateLayout';
import { homePage } from '../content/siteContent';
import styles from './CorporateSite.module.css';

const heroMetrics = [
  { value: 'Всегда', label: 'доступность сервиса и поддержка заказов' },
  { value: '21+', label: 'ответственный доступ для совершеннолетних пользователей' },
  { value: '1 app', label: 'каталог, оплата, статусы и повтор заказа' }
];

function LandingPage() {
  return (
    <div className={styles.site}>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>{homePage.hero.kicker}</p>
                <h1 className={styles.heroTitle}>{homePage.hero.title}</h1>
                <p className={styles.heroSubtitle}>{homePage.hero.subtitle}</p>

                <AppDownloadButtons />
              </div>
            </div>

            <div className={styles.heroMetricPanel}>
              {heroMetrics.map((metric) => (
                <div key={metric.value} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Преимущества</p>
              <h2 className={styles.sectionTitle}>Сервис построен вокруг удобства, скорости и контроля</h2>
              <p className={styles.sectionLead}>
                Gradusy24 соединяет каталог, оплату, сборку, доставку и поддержку в понятный пользовательский сценарий.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {homePage.advantages.map((item, index) => (
                <article key={item.title} className={styles.featureCard}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Как это работает</p>
              <h2 className={styles.sectionTitle}>Три шага от выбора до получения заказа</h2>
              <p className={styles.sectionLead}>
                Сценарий должен оставаться коротким: пользователь выбирает товары, подтверждает заказ и видит движение
                доставки.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {homePage.howItWorks.map((step) => (
                <article key={step.step} className={styles.stepCard}>
                  <span className={styles.stepIndex}>{step.step}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.appBand}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionEyebrow}>Мобильное приложение</p>
                <h2 className={styles.sectionTitle}>Главный интерфейс пользователя</h2>
                <p className={styles.sectionLead}>
                  Приложение концентрирует ключевые сценарии: заказ, история, акции, персональные предложения и
                  отслеживание доставки.
                </p>

                <ul className={styles.featureList}>
                  {homePage.appFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <AppDownloadButtons />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionTight}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Акции</p>
              <h2 className={styles.sectionTitle}>Специальные предложения без перегруза интерфейса</h2>
              <p className={styles.sectionLead}>
                Акционные механики помогают пользователю быстрее найти актуальные товары, а партнерам - аккуратно
                представить предложения.
              </p>
            </div>

            <div className={styles.promoGrid}>
              {homePage.offers.map((offer) => (
                <article key={offer.title} className={styles.promoCard}>
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.seoSection}>
          <div className={styles.container}>
            <div className={styles.seoPanel}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionEyebrow}>Описание сервиса</p>
                <h2 className={styles.sectionTitle}>{homePage.seo.title}</h2>
              </div>

              {homePage.seo.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <AllPagesCta />

        <section className={styles.sectionTight}>
          <div className={styles.container}>
            <div className={styles.heroActions}>
              <Link className={styles.ghostButton} to="/cooperation">
                Партнерство
              </Link>
              <Link className={styles.ghostButton} to="/careers">
                Вакансии
              </Link>
              <Link className={styles.ghostButton} to="/suppliers">
                Поставщикам
              </Link>
            </div>
          </div>
        </section>

        <PageBrief brief={homePage.brief} />

        <section className={styles.madeBy}>
          <div className={styles.container}>
            <p>
              by <span>DRAWBRIDGE</span>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default LandingPage;
