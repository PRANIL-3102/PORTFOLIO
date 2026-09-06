import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "contact"];

      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "about";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (
          section &&
          section.offsetTop <= scrollPosition
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2 className="logo">Pranil.</h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}

        <li>
          <button
            className={`theme-toggle ${
              darkMode ? "dark" : "light"
            }`}
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
          >
            <span className="theme-track">
              <FiSun className="sun-icon" />
              <FiMoon className="moon-icon" />

              <span className="toggle-thumb">
                {darkMode ? <FiMoon /> : <FiSun />}
              </span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;