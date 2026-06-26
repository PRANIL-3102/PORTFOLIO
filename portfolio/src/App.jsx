import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [themeTransition, setThemeTransition] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }
  
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
    {themeTransition && (
  <div
    className={`theme-orb ${
      darkMode ? "light-orb" : "dark-orb"
    }`}
  />
)}
      <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  setThemeTransition={setThemeTransition}
/>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;