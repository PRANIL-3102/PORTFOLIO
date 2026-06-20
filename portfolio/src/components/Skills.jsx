import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

function Skills() {
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    desc: "Structure"
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
    desc: "Styling"
  },

  {
    name: "React",
    icon: <FaReact />,
    desc: "Frontend"
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