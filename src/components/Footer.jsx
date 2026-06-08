import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="contacts" className="site-footer">
      <div className="container footer-inner">
        <span>Градусы24</span>
        <span>21+</span>
        <Link to="/privacy">Политика конфиденциальности</Link>
        <Link to="/offer">Пользовательское соглашение</Link>
        <a href="mailto:contact@gradusy24.example">Контакты</a>
      </div>
    </footer>
  );
}

export default Footer;
