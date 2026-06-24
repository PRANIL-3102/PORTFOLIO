import { useEffect, useState } from "react";

function Navbar({
  darkMode,
  setDarkMode,
  setThemeTransition
}) {
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
        <li>

  <button
  className={`theme-toggle ${darkMode ? "dark" : "light"}`}
  onClick={() => {

  setThemeTransition(true);

  setTimeout(() => {

    setDarkMode(!darkMode);

  }, 200);

  setTimeout(() => {

    setThemeTransition(false);

  }, 900);

}}
>

    <span className="toggle-thumb"></span>

    <svg
      className="sun-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4"/>
    </svg>

    <svg
      className="moon-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3
      7 7 0 0 0 21 12.79z"/>
    </svg>

  </button>

</li>
      </ul>
    </nav>
  );
}

export default Navbar;