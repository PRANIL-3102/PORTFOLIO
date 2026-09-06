import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiFramer,
  SiJquery,
  SiSupabase,
  SiVite,
  SiC,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces for modern web applications.",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "jQuery", icon: <SiJquery /> },
      ],
    },
    {
      title: "Backend & Database",
      description:
        "Exploring backend development and building applications with modern services.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
    },
    {
      title: "Programming Languages",
      description:
        "Building problem-solving foundations through multiple programming languages.",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <SiC /> },
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Using modern development tools to build, manage, and ship projects.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="section-number">02 / SKILLS</span>

        <h2>
          Technologies I
          <span> work with.</span>
        </h2>

        <p>
          A growing toolkit of technologies I use to build modern,
          responsive, and interactive web experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-group-card" key={index}>
            <div className="skill-group-top">
              <span className="skill-group-number">
                0{index + 1}
              </span>

              <h3>{group.title}</h3>
            </div>

            <p className="skill-group-description">
              {group.description}
            </p>

            <div className="tech-list">
              {group.skills.map((skill, skillIndex) => (
                <div
                  className="tech-item"
                  key={skillIndex}
                >
                  <span className="tech-icon">
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <p>
          <span></span>
          Always learning, building, and exploring new technologies.
        </p>
      </div>
    </section>
  );
}

export default Skills;