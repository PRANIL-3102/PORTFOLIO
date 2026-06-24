import { useEffect, useState } from "react";

function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);

}, []);
  return (
<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <h2 className="logo">Pranil.</h2>
      <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;