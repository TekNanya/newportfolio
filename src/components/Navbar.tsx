
import type { Language, translations } from '../translations'

type NavbarProps = {
  language: Language
  onLanguageChange: (language: Language) => void
  content: typeof translations.ru.navbar
}

const Navbar = ({ language, onLanguageChange, content }: NavbarProps) => {
  const cvFile =
    language === 'ru'
      ? 'Chidumebi_Belonwu_CV_RU.pdf'
      : 'Chidumebi_Belonwu_CV_EN.pdf'

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Chidumebi<span>.dev</span>
        </a>

        <ul className="navbar-links">
          <li><a href="#home">{content.home}</a></li>
          <li><a href="#about">{content.about}</a></li>
          <li><a href="#skills">{content.skills}</a></li>
          <li><a href="#projects">{content.projects}</a></li>
          <li><a href="#contact">{content.contact}</a></li>
        </ul>

        <div className="navbar-actions">
          <div className="language-switch">
            <button
              className={language === 'ru' ? 'language-button active' : 'language-button'}
              onClick={() => onLanguageChange('ru')}
            >
              RU
            </button>

            <button
              className={language === 'en' ? 'language-button active' : 'language-button'}
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}cv/${cvFile}`}
            className="navbar-cv"
            download
          >
            {content.cvButton}
          </a>

          <a href="#contact" className="navbar-cta">
            {content.letsTalk}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
