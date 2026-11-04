import type { translations } from '../translations'

type ProjectsProps = {
  content: typeof translations.ru.projects
}

const Projects = ({ content }: ProjectsProps) => {
  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <p className="section-label">{content.title}</p>

        <h2 className="section-heading">
          {content.subtitle}
        </h2>

        <div className="projects-grid">
          {content.items.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-technologies">
                {project.technologies}
              </p>

              <span className="project-status">
                {project.status}
              </span>

              <div className="project-links">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-demo"
                  >
                    {content.demoButton} ↗
                  </a>
                ) : (
                  <span className="project-link project-disabled">
                    {content.demoButton}
                  </span>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-code"
                  >
                    {content.codeButton} ↗
                  </a>
                ) : (
                  <span className="project-link project-disabled">
                    {content.codeButton}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects