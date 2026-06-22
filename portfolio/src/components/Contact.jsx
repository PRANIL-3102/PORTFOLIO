import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        <a
  href="mailto:pranilsinghamahapatra4@gmail.com"
  className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>Email me</p>
  </a>

       <a
  href="https://www.linkedin.com/in/pranil-singha-mahapatra"
  className="contact-card"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="contact-icon" />
  <h3>LinkedIn</h3>
  <p>View Profile</p>
</a>

        <a href="https://github.com/PRANIL-3102"
        className="contact-card"
        target="_blank"
        rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>View Projects</p>
          </a>
          </div>
    </section>
  );
}

export default Contact;