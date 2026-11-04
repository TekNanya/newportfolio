
import type { translations } from '../translations'

type HeroProps = {
  content: typeof translations.ru.hero
}

const Hero = ({ content }: HeroProps) => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          {content.greeting}
        </p>

        <h1>
          {content.title}
        </h1>

        <h2>
          {content.role}
        </h2>

        <p className="hero-description">
          {content.description}
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            {content.projectsButton}
          </a>

          <a href="#contact" className="btn btn-outline">
            {content.contactButton}
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero
