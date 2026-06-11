import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LegalPage.module.css';

const requestEmail = 'shrvse@drawbridge.kz';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  accountId: '',
  comment: ''
};

function AccountDeletionPage() {
  const [form, setForm] = useState(initialForm);

  const mailtoLink = useMemo(() => {
    const subject = 'Запрос на удаление аккаунта Gradusy24';
    const body = [
      'Здравствуйте.',
      '',
      'Прошу удалить мой аккаунт в приложении Gradusy24.',
      '',
      `Имя: ${form.name || '-'}`,
      `Email для связи: ${form.email || '-'}`,
      `Телефон аккаунта: ${form.phone || '-'}`,
      `ID аккаунта / комментарий: ${form.accountId || '-'}`,
      '',
      `Дополнительная информация: ${form.comment || '-'}`,
      '',
      'Подтверждаю, что понимаю последствия удаления аккаунта и прошу обработать этот запрос.'
    ].join('\n');

    return `mailto:${requestEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>
          НА ГЛАВНУЮ
        </Link>

        <article className={styles.panel}>
          <p className={styles.kicker}>ACCOUNT</p>
          <h1 className={styles.title}>Удаление аккаунта</h1>

          <div className={styles.content}>
            <p className={styles.lead}>
              Чтобы запросить удаление аккаунта Gradusy24, заполните данные ниже и отправьте письмо на
              shrvse@drawbridge.kz. После отправки запроса команда проверит принадлежность аккаунта и обработает
              обращение.
            </p>

            <section className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>Инструкция</h2>
              <p className={styles.text}>1. Укажите телефон или email, который использовался в аккаунте.</p>
              <p className={styles.text}>2. Добавьте ID аккаунта или комментарий, если эта информация доступна.</p>
              <p className={styles.text}>
                3. Нажмите кнопку "Отправить запрос" - откроется почтовый клиент с готовым письмом.
              </p>
              <p className={styles.text}>
                4. Отправьте письмо. Если почтовый клиент не открылся, отправьте запрос вручную на{' '}
                <a className={styles.inlineLink} href={`mailto:${requestEmail}`}>
                  {requestEmail}
                </a>
                .
              </p>
            </section>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Имя</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                <span>Email для связи</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Телефон аккаунта</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>ID аккаунта или дополнительный идентификатор</span>
                <input
                  name="accountId"
                  type="text"
                  value={form.accountId}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                <span>Комментарий</span>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  rows="5"
                />
              </label>

              <button className={styles.submitButton} type="submit">
                Отправить запрос
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AccountDeletionPage;
