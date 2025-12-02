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
        <a
          onClick={() =>
            document.getElementById("hero")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          style={{ cursor: "pointer" }}
        >
          Home
        </a>

        <a
          onClick={() =>
            document.getElementById("about-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          style={{ cursor: "pointer" }}
        >
          About
        </a>

        <a
          onClick={() =>
            document.getElementById("services-location")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          style={{ cursor: "pointer" }}
        >
          Services
        </a>

        <a
          onClick={() =>
            document.getElementById("contact-section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          style={{ cursor: "pointer" }}
        >
          Contact
        </a>
      </nav>

    </header>
  );
}

export default Header;
