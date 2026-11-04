import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { translations, type Language } from './translations'

function App() {
  const [language, setLanguage] = useState<Language>('ru')

  const content = translations[language]

  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        content={content.navbar}
      />

      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Skills content={content.skills} />
        <Projects content={content.projects} />
        <Contact content={content.contact} />
      </main>
    </>
  )
}

export default App