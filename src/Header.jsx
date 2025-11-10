import './Header.css';

function Header() {
  return (
    <header id="header">
      <div className="brand-text">
        <h1 className="brand-main">AJ6</h1>
        <div className="brand-line"></div>
        <p className="brand-sub">Motors</p>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
