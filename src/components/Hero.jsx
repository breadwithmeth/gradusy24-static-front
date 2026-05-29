import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero swiss-grid-pattern">
      <div className="container hero-grid">
        <div>
          <p className="section-kicker">00. ВХОД</p>
          <h1>Градусы24 — сервис для взрослых пользователей</h1>
          <p className="hero-subtitle">
            Удобный способ оформить заявку через приложение. Быстро, конфиденциально и без лишних действий.
          </p>
          <div className="hero-actions">
            <Link to="/app" className="btn btn-primary">
              Перейти в приложение
            </Link>
            <p className="hero-note">Доступно только для пользователей 21+</p>
          </div>
        </div>

        <div className="hero-figure" aria-hidden="true">
          <div className="shape shape-a" />
          <div className="shape shape-b" />
          <div className="shape shape-c" />
          <div className="shape-line" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
