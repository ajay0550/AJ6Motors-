import './ServicesLocation.css';
import ServiceCard from './ServiceCard.jsx';

function ServicesLocation() {
  return (
    <section id="services-location">
      <h2 className="section-title">
        <span>Our Services</span>
      </h2>


      <div className='mainDiv'> 
        <ServiceCard className='servicecard'
          title="Car Servicing"
          image="/pic1_aj6.jpg"
          points={[
                  "Oil change",
                  
                  "Full check-up"
                  ]}
          couponText="⭐ 4.8 rated service"
          btnText="Book Now"
        />
        <ServiceCard className='servicecard'
          title="Denting & Painting"
          image="/in_servicesdent.jpg"
          points={[
                  "Dent removal",
                  "Premium paint finish",
                  ]}
          couponText="Best price guaranteed"
          btnText="Book Now"
        />
        <ServiceCard className='servicecard'
          title="AC Service"
          image="/ac_service.png"
          points={[
                  "Cooling test",
                  "Air filter cleaning"
                  ]}
          couponText="⭐ Trusted cooling experts"
          btnText="Book Now"
        />
        <ServiceCard className='servicecard'
          title="Car Wash"
          image="/car_wash.png"
          points={[
                  "Foam wash",
                  "Wheel cleaning",
                  "Deep clean"
                  ]}
          couponText="Fast Same-day wash"
          btnText="Book Now"
        />

      </div>
      
      

      
    </section>
  );
}

export default ServicesLocation;
