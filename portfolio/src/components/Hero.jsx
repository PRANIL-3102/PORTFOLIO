import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      {/* Background decoration */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Pranil <span>Singha Mahapatra.</span>
          </h1>

          <div className="hero-role">
            <span>I am a </span>

            <strong key={roleIndex} className="role-changing">
              {roles[roleIndex]}
            </strong>
          </div>

          <p className="hero-description">
            I'm a Computer Science Engineering student passionate about
            building modern, responsive, and interactive web experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View My Work
              <FaArrowRight />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/PRANIL-3102"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pranil-singha-mahapatra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="image-ring ring-one"></div>
            <div className="image-ring ring-two"></div>

            <div className="hero-image">
              <img src="/prof.jpg" alt="Pranil Singha Mahapatra" />
            </div>

            <div className="hero-card hero-card-top">
              <span>⚛</span>
              <div>
                <strong>React</strong>
                <small>Frontend Development</small>
              </div>
            </div>

            <div className="hero-card hero-card-bottom">
              <span>💻</span>
              <div>
                <strong>Building</strong>
                <small>Modern Web Experiences</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>

        <div className="scroll-icon">
          <FaArrowDown />
        </div>
      </a>
    </section>
  );
}

export default Hero;