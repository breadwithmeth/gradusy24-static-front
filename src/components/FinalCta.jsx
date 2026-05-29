import { Link } from 'react-router-dom';

function FinalCta() {
  return (
    <section className="section cta-block">
      <div className="container split-block">
        <p className="section-kicker">04. ПЕРЕХОД</p>
        <div className="panel cta-panel">
          <h2>Продолжить в приложении</h2>
          <p>Для просмотра доступных возможностей сервиса перейдите в приложение.</p>
          <Link to="/app" className="btn btn-primary btn-small">
            Перейти в приложение
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
