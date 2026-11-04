
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

import type { translations } from '../translations'

type ContactProps = {
  content: typeof translations.ru.contact
}

const Contact = ({ content }: ContactProps) => {
  const email = 'nanyatech01@gmail.com'
  const github = 'https://github.com/TekNanya'
  const linkedin = 'www.linkedin.com/in/chidumebi-belonwu-bab43a3a1'

  return (
    <section id="contact" className="section contact">
      <div className="section-container">

        <p className="section-label">{content.title}</p>

        <h2 className="section-heading">
          {content.heading}
        </h2>

        <p className="contact-description">
          {content.description}
        </p>

        <a
          href={`mailto:${email}`}
          className="btn btn-primary contact-button"
        >
          {content.button}
        </a>

        <div className="contact-links">

          <a
            href={`mailto:${email}`}
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact
