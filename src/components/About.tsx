import type { translations } from '../translations'

type AboutProps = {
  content: typeof translations.ru.about
}

const About = ({ content }: AboutProps) => {
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <p className="section-label">{content.title}</p>

        <h2 className="section-heading">{content.heading}</h2>

        <div className="about-content">
          <div className="about-text">
            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
            <p>{content.paragraph3}</p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <h3>{content.educationLabel}</h3>
              <p>{content.educationValue}</p>
            </div>

            <div className="about-detail">
              <h3>{content.focusLabel}</h3>
              <p>{content.focusValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About