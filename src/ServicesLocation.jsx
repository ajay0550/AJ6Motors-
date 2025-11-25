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

        </div>
      </div>

      <div className="location">
        <h2>Visit Us</h2>
        <p>AJ6 Motors</p>
        <p>Near [Your Area Name], Jalandhar, Punjab</p>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>🕒 Open: 9:00 AM – 7:00 PM</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_LINK"
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
