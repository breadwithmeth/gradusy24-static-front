import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  appLinks,
  footerColumns,
  mainNavigation,
  pages,
  secondaryNavigation
} from '../content/siteContent';
import styles from '../pages/CorporateSite.module.css';

const formRecipients = {
  'partner-form': 'partners@gradusy24.kz',
  'resume-form': 'hr@gradusy24.kz',
  'courier-form': 'courier@gradusy24.kz',
  'supplier-form': 'suppliers@gradusy24.kz',
  'investor-form': 'investors@gradusy24.kz',
  'contact-form': 'support@gradusy24.kz'
};

function ActionLink({ action, variant = 'button' }) {
  const className = variant === 'dark' ? styles.darkButton : variant === 'ghost' ? styles.ghostButton : styles.button;

  if (action.anchor) {
    return (
      <a className={className} href={`#${action.anchor}`}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      {action.label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand} aria-label="Gradusy24">
            <span className={styles.brandText}>
              <span className={styles.brandName}>Gradusy24</span>
              <span className={styles.brandSubline}>delivery service</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            {mainNavigation.map((item) => (
              <Link key={item.to} className={styles.navLink} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <Link className={styles.ghostButton} to="/legal">
              Документы
            </Link>
            <Link className={styles.button} to="/app">
              Скачать
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.brand}>
              <span className={styles.brandText}>
                <span className={styles.brandName}>Gradusy24</span>
                <span className={styles.brandSubline}>delivery service</span>
              </span>
            </Link>
            <p>
              Технологичный сервис доставки для совершеннолетних пользователей. Быстрый заказ, понятные статусы,
              партнерская сеть и поддержка на каждом этапе.
            </p>
          </div>

          <div className={styles.footerColumns}>
            {footerColumns.map((column) => (
              <div key={column.title} className={styles.footerColumn}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Gradusy24</span>
          <span>Сервис предназначен для совершеннолетних пользователей.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ page }) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.container}>
        <div className={styles.pageHeroInner}>
          <div className={styles.pageHeroCopy}>
            <p className={styles.kicker}>{page.kicker}</p>
            <h1 className={styles.pageTitle}>{page.title}</h1>
            <p className={styles.pageLead}>{page.lead}</p>
            {page.actions ? (
              <div className={styles.pageActions}>
                {page.actions.map((action) => (
                  <ActionLink key={action.label} action={action} />
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.pageStats}>
            <div className={styles.statsRow}>
              {(page.stats || [page.navLabel, 'Gradusy24', 'Сервис каждый день']).map((item) => (
                <span key={item} className={styles.statPill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderCard(card) {
  const content = (
    <>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardText}>{card.text}</p>
    </>
  );

  if (card.to) {
    return (
      <Link key={card.title} className={styles.card} to={card.to}>
        {content}
      </Link>
    );
  }

  return (
    <article key={card.title} className={styles.card}>
      {content}
    </article>
  );
}

function ContentSection({ section }) {
  return (
    <section className={styles.contentBlock}>
      <div className={styles.blockGrid}>
        <h2 className={styles.blockTitle}>{section.title}</h2>

        <div className={styles.blockBody}>
          {section.text ? <p className={styles.plainText}>{section.text}</p> : null}

          {section.items ? (
            <ul className={styles.simpleList}>
              {section.items.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {section.steps ? (
            <ol className={styles.orderedList}>
              {section.steps.map((step) => (
                <li key={step} className={styles.listItem}>
                  {step}
                </li>
              ))}
            </ol>
          ) : null}

          {section.cards ? <div className={styles.cardGrid}>{section.cards.map(renderCard)}</div> : null}

          {section.articles ? (
            <div className={styles.articleGrid}>
              {section.articles.map((article) => (
                <article key={article.title} className={styles.articleCard}>
                  <span className={styles.articleTag}>{article.tag}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleText}>{article.text}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.faq ? (
            <div className={styles.faqList}>
              {section.faq.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.title === 'Карта' ? <div className={styles.mapPlaceholder}>Офис, города и зоны сервиса</div> : null}
        </div>
      </div>
    </section>
  );
}

function getFieldType(field) {
  const normalized = field.toLowerCase();

  if (normalized.includes('email')) {
    return 'email';
  }

  if (normalized.includes('телефон')) {
    return 'tel';
  }

  return 'text';
}

function isTextarea(field) {
  const normalized = field.toLowerCase();
  return (
    normalized.includes('комментарий') ||
    normalized.includes('сообщение') ||
    normalized.includes('опыт') ||
    normalized.includes('интерес')
  );
}

export function FormBlock({ form }) {
  const [submitted, setSubmitted] = useState(false);

  if (!form) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .map(([key, value]) => `${key}: ${value || '-'}`)
      .join('\n');
    const recipient = formRecipients[form.id] || 'info@gradusy24.kz';
    const subject = `Заявка Gradusy24: ${form.title}`;

    setSubmitted(true);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id={form.id} className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.formPanel}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Форма связи</p>
            <h2 className={styles.sectionTitle}>{form.title}</h2>
            <p className={styles.sectionLead}>{form.subtitle}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {form.fields.map((field) => (
              <label key={field} className={styles.field}>
                <span>{field}</span>
                {isTextarea(field) ? (
                  <textarea className={styles.textarea} name={field} rows="5" />
                ) : (
                  <input className={styles.input} name={field} type={getFieldType(field)} />
                )}
              </label>
            ))}

            <button className={styles.button} type="submit">
              {form.buttonLabel}
            </button>
            {submitted ? (
              <p className={styles.plainText}>
                Откроется почтовый клиент с подготовленным письмом. Если окно не появилось, напишите нам через контакты
                внизу страницы.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export function PageBrief({ brief }) {
  if (!brief) {
    return null;
  }

  return (
    <section className={styles.brief}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>ТЗ страницы</p>
          <h2 className={styles.sectionTitle}>Для дизайнера и фронтенд-разработчика</h2>
        </div>

        <div className={styles.briefGrid}>
          <article className={styles.briefItem}>
            <h3>Идея иллюстрации</h3>
            <p>{brief.illustration}</p>
          </article>
          <article className={styles.briefItem}>
            <h3>UX/UI рекомендация</h3>
            <p>{brief.ux}</p>
          </article>
          <article className={styles.briefItem}>
            <h3>Структура</h3>
            <p>{brief.structure}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CorporatePage({ pageId }) {
  const page = pages[pageId];

  return (
    <div className={styles.site}>
      <SiteHeader />
      <main>
        <PageHero page={page} />

        <section className={styles.pageSection}>
          <div className={styles.container}>
            <div className={styles.contentBlocks}>
              {page.sections.map((section) => (
                <ContentSection key={section.title} section={section} />
              ))}
            </div>
          </div>
        </section>

        <FormBlock form={page.form} />
        <PageBrief brief={page.brief} />
      </main>
      <SiteFooter />
    </div>
  );
}

export function AllPagesCta() {
  return (
    <section className={styles.ctaBand}>
      <div className={styles.container}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>Gradusy24 как корпоративный сервис</h2>
            <p className={styles.ctaText}>
              Структура сайта закрывает пользовательский, партнерский, карьерный, юридический и инвестиционный
              контуры.
            </p>
          </div>
          <div className={styles.heroActions}>
            {secondaryNavigation.map((item) => (
              <Link key={item.to} className={styles.storeButton} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppDownloadButtons() {
  return (
    <div className={styles.heroActions}>
      {appLinks.map((link) => (
        link.href ? (
          <a key={link.label} className={styles.storeButton} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ) : (
          <Link key={link.label} className={styles.storeButton} to={link.to}>
            {link.label}
          </Link>
        )
      ))}
    </div>
  );
}
