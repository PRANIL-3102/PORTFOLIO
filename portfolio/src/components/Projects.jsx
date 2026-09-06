import {
  FaCode,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

import Reveal from "./Reveal";

function Projects() {
  return (
    <section className="projects" id="projects">

      {/* HEADER */}
      <Reveal>
        <div className="projects-header">
          <span className="section-number">03 / PROJECTS</span>

          <h2>
            Building things worth
            <span> showing.</span>
          </h2>

          <p>
            I'm currently working on projects and ideas that I'm taking the
            time to properly design, build, and polish before showcasing here.
          </p>
        </div>
      </Reveal>

      {/* CONSTRUCTION CARD */}
      <Reveal delay={0.15}>
        <div className="construction-card">

          <div className="construction-grid"></div>

          <div className="construction-content">

            {/* STATUS */}
            <Reveal delay={0.1} direction="left">
              <div className="construction-status">
                <span className="status-dot"></span>
                CURRENTLY BUILDING
              </div>
            </Reveal>

            {/* MAIN */}
            <Reveal delay={0.2}>
              <div className="construction-main">

                <div className="construction-icon">
                  <FaCode />
                </div>

                <div>
                  <h3>New projects are in progress.</h3>

                  <p>
                    I'm focused on creating meaningful projects that solve
                    real problems and represent the quality of work I want
                    to showcase.
                  </p>
                </div>

              </div>
            </Reveal>

            {/* FOOTER */}
            <Reveal delay={0.3}>
              <div className="construction-footer">

                <div className="project-progress">
                  <div className="progress-top">
                    <span>PORTFOLIO STATUS</span>
                    <span>IN DEVELOPMENT</span>
                  </div>

                  <div className="progress-bar">
                    <span></span>
                  </div>
                </div>

                <div className="construction-tags">
                  <span>React</span>
                  <span>Building</span>
                  <span>Coming Soon</span>
                </div>

              </div>
            </Reveal>

          </div>

          {/* FLOATING ICONS */}
          <Reveal delay={0.35} direction="right">
            <div className="construction-corner corner-one">
              <FaGithub />
            </div>
          </Reveal>

          <Reveal delay={0.45} direction="right">
            <div className="construction-corner corner-two">
              <FaArrowUpRightFromSquare />
            </div>
          </Reveal>

        </div>
      </Reveal>

      {/* BOTTOM NOTE */}
      <Reveal delay={0.25}>
        <div className="projects-bottom-note">
          <span></span>

          <p>
            Quality over quantity — projects will be added when they're ready.
          </p>
        </div>
      </Reveal>

    </section>
  );
}

export default Projects;