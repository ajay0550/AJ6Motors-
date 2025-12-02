import './Hero.css';


function Hero() {
  return (
<section id="hero">
  <div className="hero-slider">
    <div className="slide"></div>
    <div className="slide"></div>
  </div>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Precision. Performance. Passion.</h1>
    <p>Expert car repair and maintenance you can rely on.</p>
    
    <button
    onClick={() => {
    document.getElementById("services-location").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }}
    >
    Explore Services
  </button>
  </div>
</section>
  );
}

export default Hero
