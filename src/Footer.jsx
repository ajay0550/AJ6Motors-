import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">

        <div className="brand-text">
        <h1 className="brand-main">AJ6</h1>
        <div className="brand-line"></div>
        <p className="brand-sub">Motors</p>
        </div>
        
        <div className="footer-info">
          <p>Open Daily: 10:00 AM – 8:00 PM</p>
          <p>Kompally Main Road, Hyderabad</p>
          <p>Phone: +91 7386594076 / +91 9652571976</p>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} AJ6 Motors. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
