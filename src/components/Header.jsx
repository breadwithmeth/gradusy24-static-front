import { Link } from 'react-router-dom';

const navItems = [
  { href: '#about', label: 'О сервисе' },
  { href: '#how', label: 'Как работает' },
  { href: '#safety', label: 'Безопасность' },
  { href: '#contacts', label: 'Контакты' }
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Градусы24 на главную">
          Градусы24
        </Link>

        <nav className="top-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="top-nav-link">
              <span>{item.label}</span>
              <span aria-hidden="true">{item.label}</span>
            </a>
          ))}
        </nav>

        <Link to="/app" className="btn btn-primary btn-small">
          Перейти в приложение
        </Link>
      </div>
    </header>
  );
}

export default Header;
