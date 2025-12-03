import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  return (
    <header id="header">
      {/* Logo */}
      <div className="brand-text">
        <h1 className="brand-main">AJ6</h1>
        <div className="brand-line"></div>
        <p className="brand-sub">Motors</p>
      </div>

      {/* Mobile Burger */}
      <div className="burger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a onClick={() => scrollTo("hero")}>Home</a>
        <a onClick={() => scrollTo("about-section")}>About</a>
        <a onClick={() => scrollTo("services-location")}>Services</a>
        <a onClick={() => scrollTo("contact-section")}>Contact</a>
      </nav>

      <div className="red-accent"></div>
    </header>
  );
}

export default Header;
