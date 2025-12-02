import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ServicesLocation from "./ServicesLocation";
import ReviewSection from "./ReviewSection";
import ContactSection from "./ContactSection";



function App() {

  return (
    <>
    <Header/>
    <hr
    style={{
    border: "none",       
    height: "0.5px",        
    backgroundColor: "#e50914", 
    margin: 0    
    }}
    />
    <Hero/>
    <ServicesLocation/>
    <ReviewSection/>
    <ContactSection/>
    <Footer/>
    
    </>
     
  
  );
}

export default App
