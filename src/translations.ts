
export type Language = 'ru' | 'en'

export const translations = {
  ru: {
    navbar: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
      letsTalk: 'Связаться',
      cvButton: 'Скачать CV'
    },

    hero: {
      greeting: 'Здравствуйте! Добро пожаловать в мое портфолио',
      title: 'Привет, я Чидумеби',
      role: 'Младший Full-Stack разработчик',
      description:
        'Разрабатываю надежные серверные системы на C# и ASP.NET Core, а также современные веб-приложения с использованием React и TypeScript.',
      projectsButton: 'Мои проекты',
      contactButton: 'Связаться со мной'
    },

    about: {
      title: 'Обо мне',
      heading: 'Разработчик, который любит создавать полезные решения',
      paragraph1:
        'Я окончила обучение по направлению «Программная инженерия» и развиваюсь в области веб-разработки.',
      paragraph2:
        'Мой основной интерес — разработка серверной части на C# и ASP.NET Core, работа с базами данных и создание современных интерфейсов с React и TypeScript.',
      paragraph3:
        'Я постоянно изучаю новые технологии, практикуюсь на собственных проектах и стремлюсь создавать понятные, надёжные и удобные приложения.',
      educationLabel: 'Образование',
      educationValue: 'Бакалавриат — Программная инженерия',
      focusLabel: 'Основное направление',
      focusValue: 'C# / ASP.NET Core и Full-Stack разработка'
    },

    skills: {
      title: 'Навыки',
      subtitle: 'Технологии и инструменты, с которыми я работаю',
      groups: [
        {
          title: 'Backend',
          items: [
            'C#',
            '.NET / ASP.NET Core',
            'REST API',
            'Entity Framework Core'
          ]
        },
        {
          title: 'Frontend',
          items: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React'
          ]
        },
        {
          title: 'Базы данных',
          items: [
            'SQL Server',
            'SQL',
            'MongoDB'
          ]
        },
        {
          title: 'Инструменты',
          items: [
            'Git',
            'GitHub',
            'Visual Studio',
            'VS Code'
          ]
        }
      ]
    },

    projects: {
      title: 'Проекты',
      subtitle: 'Практические проекты, демонстрирующие мои навыки разработки',
      demoButton: 'Посмотреть демо',
      codeButton: 'Исходный код',
      items: [
        {
          name: 'BrkTrd',
          category: 'Full-Stack приложение',
          description:
            'Платформа, разрабатываемая с использованием ASP.NET Core Web API, React и TypeScript. Проект помогает мне развивать навыки проектирования API, работы с базами данных и интеграции frontend и backend.',
          technologies:
            'C# · ASP.NET Core · Entity Framework Core · SQL Server · React · TypeScript',
          status: 'В разработке',
          demoUrl: 'https://github.com/TekNanya/brktrddashboard.git',
          githubUrl: 'https://github.com/TekNanya/brktrddashboard.git'
        },
        {
          name: 'Beloved Afro Store',
          category: 'E-commerce',
          description:
            'Веб-магазин с каталогом товаров и административной частью для управления содержимым магазина.',
          technologies:
            'C# · ASP.NET Core MVC · Entity Framework Core · SQL Server · HTML · CSS · JavaScript',
             status: 'Личный проект',
          demoUrl: 'https://drive.google.com/file/d/1huHXMr5_Kew0bVkvQg_Avug-Ph0tdvm5/view?usp=sharing',
          githubUrl: 'https://github.com/TekNanya/BelovedAS.git'
        },
        {
        name: 'My Developer Portfolio',
        category: 'Personal Portfolio',
        description:
            'Персональный сайт-портфолио, представляющий мои навыки, образование, технологии и проекты. Сайт поддерживает русский и английский языки.',
        technologies:
            'React · TypeScript · Vite · CSS',
        status: 'Завершён',
        demoUrl: 'https://portfolio-i1jz-phi-2026.vercel.app/',
        githubUrl: 'YOUR_GITHUB_REPOSITORY_URL'
        }
    ]
    },

    contact: {
      title: 'Контакты',
      heading: 'Давайте обсудим сотрудничество',
      description:
        'Открыта к возможностям для начинающих разработчиков, стажировкам и интересным IT-проектам. Буду рада вашему сообщению.',
      emailLabel: 'Электронная почта',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      button: 'Написать мне'
    }
  },

  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      cvButton: 'Download CV'
    },

    hero: {
      greeting: 'Hello! Welcome to my portfolio',
      title: "Hi, I'm Chidumebi",
      role: 'Junior Full-Stack Developer',
      description:
        'I build reliable backend systems using C# and ASP.NET Core, alongside modern web applications using React and TypeScript.',
      projectsButton: 'View My Projects',
      contactButton: 'Contact Me'
    },

    about: {
      title: 'About Me',
      heading: 'A developer who enjoys building useful solutions',
      paragraph1:
        'I graduated with a degree in Software Engineering and am developing my career in web development.',
      paragraph2:
        'My main interests are backend development with C# and ASP.NET Core, database management, and building modern user interfaces with React and TypeScript.',
      paragraph3:
        'I continuously learn new technologies, practise through personal projects, and aim to build clear, reliable, and user-friendly applications.',
      educationLabel: 'Education',
      educationValue: "Bachelor's Degree — Software Engineering",
      focusLabel: 'Main Focus',
      focusValue: 'C# / ASP.NET Core and Full-Stack Development'
    },

    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I work with',
      groups: [
        {
          title: 'Backend',
          items: [
            'C#',
            '.NET / ASP.NET Core',
            'REST API',
            'Entity Framework Core'
          ]
        },
        {
          title: 'Frontend',
          items: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React'
          ]
        },
        {
          title: 'Databases',
          items: [
            'SQL Server',
            'SQL',
            'MongoDB'
          ]
        },
        {
          title: 'Tools',
          items: [
            'Git',
            'GitHub',
            'Visual Studio',
            'VS Code'
          ]
        }
      ]
    },

    projects: {
      title: 'Projects',
      subtitle: 'Practical projects demonstrating my development skills',
      demoButton: 'Live Demo',
      codeButton: 'View Code',
      items: [
        {
          name: 'BrkTrd',
          category: 'Full-Stack Application',
          description:
            'A platform being developed with ASP.NET Core Web API, React, and TypeScript. This project helps me develop skills in API design, database management, and frontend-backend integration.',
          technologies:
            'C# · ASP.NET Core · Entity Framework Core · SQL Server · React · TypeScript',
          status: 'In Progress',
          demoUrl: 'https://github.com/TekNanya/brktrddashboard.git',
          githubUrl: 'https://github.com/TekNanya/brktrddashboard.git'
        },
        {
        name: 'Beloved Afro Store',
        category: 'E-commerce',
        description:
            'An online store featuring a product catalogue and an admin area for managing store content.',
        technologies:
            'C# · ASP.NET Core MVC · Entity Framework Core · SQL Server · HTML · CSS · JavaScript',
        status: 'Personal Project',
        demoUrl: 'https://drive.google.com/file/d/1huHXMr5_Kew0bVkvQg_Avug-Ph0tdvm5/view?usp=sharing',
        githubUrl: 'https://github.com/TekNanya/BelovedAS.git'
        },
        {
        name: 'My Developer Portfolio',
        category: 'Personal Portfolio',
        description:
            'A personal developer portfolio showcasing my skills, education, technologies, and projects. The website supports both Russian and English.',
        technologies:
            'React · TypeScript · Vite · CSS',
        status: 'Completed',
        demoUrl: 'https://portfolio-i1jz-phi-2026.vercel.app/',
        githubUrl: 'YOUR_GITHUB_REPOSITORY_URL'
        }
      ]
    },

    contact: {
      title: 'Contact',
      heading: "Let's discuss working together",
      description:
        'I am open to junior developer opportunities, internships, and interesting IT projects. I would be happy to hear from you.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      button: 'Send me a message'
    }
  }
}
