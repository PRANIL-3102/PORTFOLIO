function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1>
          Hello, it's me <span>Pranil</span>
        </h1>

        <h2>B.Tech CSE Student | Frontend Developer</h2>

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