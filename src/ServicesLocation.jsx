import './ServicesLocation.css';

function ServicesLocation() {
  return (
    <section id="services-location">
      <div className="services">
        <h2>Our Services</h2>
        <div className="service-grid">

          <div className="service-card">
            <h3>Car Servicing</h3>
            <p>Full mechanical and performance servicing for all brands.</p>
          </div>

          <div className="service-card">
            <h3>Denting & Painting</h3>
            <p>Professional dent removal and premium paint finish to restore your car’s shine.</p>
          </div>

          <div className="service-card">
            <h3>Computer Car Checkup</h3>
            <p>Modern diagnostics for engine, sensors, and electrical systems.</p>
          </div>

          <div className="service-card">
            <h3>AC & Cooling Services</h3>
            <p>AC repair, gas refill, and deep cleaning for optimal cooling.</p>
          </div>

          <div className="service-card">
            <h3>General Maintenance</h3>
            <p>Oil change, brake check, fluid top-up, and more for smooth rides.</p>
          </div>
          <div className="service-card">
            <h3>Car Wash</h3>
            <p>High-pressure wash, foam cleaning, and detailing for a spotless shine.</p>
          </div>

        </div>
      </div>

      <div className="location">
        <h2>Visit Us</h2>
        <p>AJ6 Motors</p>
        <br></br>
        <p>1-144, Satti Reddy Complex, Ganesh Nagar Beside Lambodar Tires, Near Zudio Shopping Komaplly, Main Road, Bolarum, Secunderabad, Telangana 500100, India</p>
        <br></br>
        <p> +91 73865 94076</p>
        <p> Open: 10:00 AM – 8:00 PM</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3547203235116!2d78.48832087475198!3d17.538290383374843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85997367c6e5%3A0x4f7d4c41f6767345!2sAJ6%20Motors%20Car%20Service%20Centre!5e0!3m2!1sen!2sin!4v1764050633249!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="AJ6 Motors Location"
        ></iframe>
      </div>
    </section>
  );
}

export default ServicesLocation;
