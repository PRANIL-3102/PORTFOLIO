import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Keyboard3D from "./components/Keyboard3D";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Keyboard3D/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;