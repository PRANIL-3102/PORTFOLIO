import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import Reveal from "./Reveal";

function About() {
  return (
    <section className="about" id="about">

      {/* SECTION HEADING */}
      <Reveal>
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>

          <h2>
            Building digital experiences
            <span> with purpose.</span>
          </h2>
        </div>
      </Reveal>

      <div className="about-grid">

        {/* MAIN INTRODUCTION */}
        <Reveal direction="left" delay={0.1}>
          <div className="about-intro">
            <p className="about-lead">
              I'm <span>Pranil Singha Mahapatra</span>, a Computer Science
              Engineering student focused on building modern, responsive,
              and interactive web experiences.
            </p>

            <p>
              I enjoy turning ideas into clean and functional digital
              experiences using technologies like React, JavaScript, HTML,
              and CSS. I’m continuously improving my skills by building
              projects and exploring new technologies.
            </p>

            <a href="#projects" className="about-link">
              Explore my work
              <span>↗</span>
            </a>
          </div>
        </Reveal>

        {/* HIGHLIGHT CARDS */}
        <div className="about-highlights">

          <Reveal direction="right" delay={0.1}>
            <div className="about-highlight-card">
              <div className="highlight-icon">
                <FaCode />
              </div>

              <div>
                <span>Focus</span>
                <h3>Frontend Development</h3>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="about-highlight-card">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>

              <div>
                <span>Education</span>
                <h3>Computer Science Engineering</h3>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <div className="about-highlight-card">
              <div className="highlight-icon">
                <FaLaptopCode />
              </div>

              <div>
                <span>Currently</span>
                <h3>Building & Improving</h3>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.4}>
            <div className="about-highlight-card">
              <div className="highlight-icon">
                <FaRocket />
              </div>

              <div>
                <span>Goal</span>
                <h3>Creating Better Digital Experiences</h3>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* CURRENTLY SECTION */}

      <Reveal delay={0.2}>
        <div className="currently-section">

          <div className="currently-label">
            <span className="currently-dot"></span>
            CURRENTLY
          </div>

          <div className="currently-items">

            <Reveal delay={0.1}>
              <div className="currently-item">
                <span className="currently-title">BUILDING</span>
                <p>Personal projects and modern web applications.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="currently-item">
                <span className="currently-title">LEARNING</span>
                <p>Advanced React concepts and full-stack development.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="currently-item">
                <span className="currently-title">EXPLORING</span>
                <p>New technologies and better ways to build on the web.</p>
              </div>
            </Reveal>

          </div>

        </div>
      </Reveal>

    </section>
  );
}

export default About;