<div className="flip-card">
  <div className="flip-card-inner">

    {/* FRONT */}
    <div className="flip-card-front">
      <img src={project.image} alt="project" />
      <h3>{project.title}</h3>
    </div>

    {/* BACK */}
    <div className="flip-card-back">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <button>View Details</button>
    </div>

  </div>
</div>