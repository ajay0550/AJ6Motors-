import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ServicesLocation from "./ServicesLocation";



function App() {

  return (
    <>
    <Header/>
    <hr
    style={{
    border: "none",       
    height: "1px",        
    backgroundColor: "#e50914", 
    margin: 0    
    }}
    />
    <Hero/>
    <ServicesLocation/>
    <Footer/>
    </>
     
  
  );
}

export default App
