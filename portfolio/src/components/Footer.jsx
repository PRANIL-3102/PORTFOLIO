import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            Pranil<span>.</span>
          </h2>

          <p>
            Building modern, responsive, and interactive web experiences.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <span className="footer-label">EXPLORE</span>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <span className="footer-label">CONNECT</span>

          <a
            href="https://github.com/PRANIL-3102"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pranil-singha-mahapatra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pranil Singha Mahapatra. All rights reserved.
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back to top
          <span>
            <FaArrowUp />
          </span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;