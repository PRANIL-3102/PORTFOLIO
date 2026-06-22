import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
  FaJava,
} from "react-icons/fa";

import {
  SiPython,
  SiTailwindcss
} from "react-icons/si";

function Skills() {
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    desc: "Structures web pages with clean and semantic markup."
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
    desc: "Designs modern, responsive and attractive web experiences."
  },

  {
    name: "React",
    icon: <FaReact />,
    desc: "Builds fast and interactive user interfaces with components."
  },

  {
    name: "JavaScript",
    icon: <FaJs/>,
    desc: "Brings websites to life with dynamic interactions."
  },

  {
    name: "Python",
    icon: <SiPython />,
    desc: "Simple yet powerful language for automation and development."
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>,
    desc: "Designs modern, responsive and attractive web experiences."
  },

  {
    name: "Java",
    icon: <FaJava/>,
    desc: "Strong foundation for object-oriented programming."
  },

    {
    name: "Git",
    icon: <FaGitAlt />,
    desc: "Version Control"
  }
];
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

<div className="skills-container">
  {skills.map((skill) => (
    <div className="skill-card">

      <div className="skill-icon">
        {skill.icon}
      </div>

      <h3>{skill.name}</h3>

      <p>{skill.desc}</p>

    </div>
  ))}
</div>
    </section>
  );
}

export default Skills;