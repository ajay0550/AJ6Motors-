import './ServicesLocation.css';
import ServiceCard from './ServiceCard.jsx';

function ServicesLocation() {
  return (
    <section id="services-location">
      <h2 className='mainDivh2'>Our Services</h2>

      <div className='mainDiv'> 
        <ServiceCard className='servicecard'
          title="Car Servicing"
          image="/pic1_aj6.jpg"
          points={[
                  "Engine oil change",
                  "Filter cleaning",
                  "Full car check-up using computer"
                  ]}
          couponText="⭐ 4.8 rated service"
          btnText="Book Now"
        />
        <ServiceCard className='servicecard'
          title="Denting & Painting"
          image="/in_servicesdent.jpg"
          points={[
                  "Body dent removal",
                  "Premium paint finish",
                  "Color matching guaranteed"
                  ]}
          couponText="Best price guaranteed"
          btnText="Book Now"
        />
        <ServiceCard className='servicecard'
          title="AC Servicing"
          image="/ac_service.png"
          points={[
                  "AC gas check",
                  "Cooling performance test",
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
                  "Tyre & wheel cleaning",
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
