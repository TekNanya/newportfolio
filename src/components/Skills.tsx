import type { translations } from '../translations'

type SkillsProps = {
  content: typeof translations.ru.skills
}

const Skills = ({ content }: SkillsProps) => {
  return (
    <section id="skills" className="section skills">
      <div className="section-container">
        <p className="section-label">{content.title}</p>
        <h2 className="section-heading">{content.subtitle}</h2>

        <div className="skills-grid">
          {content.groups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills