import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import Reveal from "./Reveal";

function Contact() {
  const email = "pranilsinghamahapatra4@gmail.com";

  return (
    <section className="contact" id="contact">

      {/* HEADER */}
      <Reveal>
        <div className="contact-header">
          <span className="section-number">04 / CONTACT</span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have an opportunity, idea, or project in mind? I'm always open
            to connecting, collaborating, and discussing new possibilities.
          </p>
        </div>
      </Reveal>

      <div className="contact-main">

        {/* MAIN EMAIL CARD */}
        <Reveal direction="left" delay={0.1}>
          <div className="contact-email-card">
            <div className="contact-grid-bg"></div>

            <div className="contact-card-content">

              {/* STATUS */}
              <Reveal delay={0.1}>
                <div className="contact-status">
                  <span></span>
                  OPEN TO OPPORTUNITIES
                </div>
              </Reveal>

              {/* EMAIL CONTENT */}
              <Reveal delay={0.2}>
                <div className="contact-email-content">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span className="contact-small-label">
                      GET IN TOUCH
                    </span>

                    <h3>Let's start a conversation.</h3>

                    <a
                      href={`mailto:${email}`}
                      className="email-link"
                    >
                      {email}
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* BUTTON */}
              <Reveal delay={0.3}>
                <a
                  href={`mailto:${email}`}
                  className="contact-email-button"
                >
                  Send me an email
                  <FaArrowUpRightFromSquare />
                </a>
              </Reveal>

            </div>
          </div>
        </Reveal>

        {/* SOCIAL LINKS */}
        <div className="contact-socials">

          <Reveal direction="right" delay={0.2}>
            <a
              href="https://github.com/PRANIL-3102"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <div className="social-icon">
                <FaGithub />
              </div>

              <div className="social-info">
                <span>GITHUB</span>
                <h3>View my work</h3>
              </div>

              <FaArrowUpRightFromSquare className="social-arrow" />
            </a>
          </Reveal>

          <Reveal direction="right" delay={0.35}>
            <a
              href="https://www.linkedin.com/in/pranil-singha-mahapatra"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <div className="social-icon">
                <FaLinkedinIn />
              </div>

              <div className="social-info">
                <span>LINKEDIN</span>
                <h3>Let's connect</h3>
              </div>

              <FaArrowUpRightFromSquare className="social-arrow" />
            </a>
          </Reveal>

        </div>
      </div>

      {/* BOTTOM STATUS */}
      <Reveal delay={0.25}>
        <div className="contact-bottom">
          <span></span>

          <p>
            Based in India · Available for opportunities and collaborations
          </p>
        </div>
      </Reveal>

    </section>
  );
}

export default Contact;