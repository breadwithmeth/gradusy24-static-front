import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="contacts" className="site-footer">
      <div className="container footer-inner">
        <span>Gradusy24</span>
        <span>21+</span>
        <Link to="/privacy">Политика конфиденциальности</Link>
        <Link to="/offer">Публичная оферта</Link>
        <Link to="/delete-account">Удалить аккаунт</Link>
        <a href="mailto:support@gradusy24.kz">Контакты</a>
      </div>
    </footer>
  );
}

export default Footer;
