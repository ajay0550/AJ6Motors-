import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";



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
    {/* <main>
        {[...Array(18)].map((_, i) => (
          <p key={i}>Placeholder content line {i + 1}</p>
        ))}
      </main> */}
    <Footer/>
    </>
     
  
  );
}

export default App
