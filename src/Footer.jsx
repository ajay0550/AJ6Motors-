import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p className="brand"> AJ6 Motors</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="socials">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
