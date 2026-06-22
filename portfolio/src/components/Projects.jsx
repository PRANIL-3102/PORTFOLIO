function Projects() {

const projects = [
  {
    title: "Proposal Website",
    description: "Interactive proposal website with animations.",
    tech:["REACT", "CSS", "JAVASCRIPT"]
},
  {
    title: "Medicine Inventory System",
    description: "Inventory management app using React and Supabase.",
    tech:["REACT", "CSS", "JAVASCRIPT", "SUPABASE"]
},
  {
    title: "TECHNOVA",
    description: "Modern ecommerce tech store.",
    tech:["REACT", "CSS", "JAVASCRIPT"]
  },
];
return (
    <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
            {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div classname="project-preview">
            Project Preview
            </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
    <div className="tech-stack">

  {project.tech.map((tech, i) => (
    <span className="tech-badge" key={i}>
      {tech}
    </span>
  ))}

</div>

<div className="project-buttons">
  <button>Github</button>
  <button>Live Demo</button>
</div>
    </div>
        ))}
    </div>
</section>
    )
}

export default Projects;
