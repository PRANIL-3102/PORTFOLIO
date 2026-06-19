function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Pranil</span>
        </h1>

        <h2>B.Tech CSE Student</h2>

        <p>
          Passionate about React, JavaScript and building
          modern web applications.
        </p>

        <div className="buttons">
          <button>View Projects</button>
          <button>Download Resume</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/prof.jpg"
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Hero;