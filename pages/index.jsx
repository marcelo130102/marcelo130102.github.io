import Image from 'next/image'
import Layout from '../components/Layout'
import { skills, study, portafolio } from '../profile'
import Skill from '../components/Skill'
import Study from '../components/Study'
import Proyecto from '../components/Portafolio'
import styles from '../styles/Home.module.css'

const experience = [
  {
    role: 'Founding Engineer',
    company: 'Vera',
    period: 'Dec 2024 – Present',
    link: 'https://www.vera-app.ai/',
    description: 'Founding Engineer at Vera, an AI-powered underwriting platform that transforms B2B lending — analyzing financial statements in any format and delivering instant risk assessments. Leading technical development and guiding interns (practicantes) since December 2024. Platform enables 99.8% accuracy, 10x faster processing.',
  },
  {
    role: 'Software Engineer',
    company: 'Pact (US Remote)',
    period: 'Nov 2025 – Feb 2026',
    description: 'Developing core backend services and APIs for a next-generation cybersecurity platform. Designing scalable, event-driven architectures with Node.js/TypeScript and AWS. Implementing secure coding practices and zero-trust concepts while leveraging AI tools. Collaborating within a distributed, remote-first engineering team. Technologies: Node.js, TypeScript, AWS, Docker, REST APIs, Event-driven Architecture.',
  },
  {
    role: 'Software Engineer',
    company: 'GIPE++ Project',
    period: 'Mar 2025 – Jun 2025',
    description: 'Designed the complete architecture of the GIPE++ web application. Fully developed the application (frontend and backend), optimizing performance and scalability. Integrated real-time authentication, user management, and interactive reports. Collaborated within a multicultural engineering team across three countries. Represented the team at international meetings in Germany. Technologies: Next.js, React, Node.js, MongoDB, Tailwind, AWS, JWT, WebSockets, Xendit, Python.',
  },
  {
    role: 'Lead Software Engineer',
    company: 'Simplicar',
    period: 'Feb 2023 – Nov 2025',
    description: 'Led development of core products, managing over 5 new projects and achieving a 20% increase in user engagement. Improved SEO by 30% and reduced page load times by 40%. Implemented WebSockets for real-time communication, increasing processing speed by 50%. Technologies: Next.js, React, MongoDB, Express.js, Python, WebSockets, AWS, Tailwind, Material UI, SEO.',
  },
  {
    role: 'Backend Development Intern',
    company: 'Silabuz (EdTech Bootcamp)',
    period: 'Oct 2022 – Feb 2023',
    description: 'Supported students with final project development and backend concept comprehension. Collaborated with HR and marketing teams to align curriculum with industry needs. Technologies: Python, Django, Redis, AWS, PostgreSQL, MySQL.',
  },
]

const achievements = [
  {
    title: 'Technical Reviewer for Jay Wengrow\'s Books',
    description: 'Provided technical reviews for "A Common-Sense Guide to Data Structures and Algorithms—Volume 2" and "A Common-Sense Guide to AI Engineering!". Helped refine content, ensure technical accuracy, and improve accessibility for beginners in Python and AI engineering.',
  },
  {
    title: 'Mentor: NASA Space Apps Challenge 2024 – Arequipa',
    description: 'Guided participants of this global hackathon, supporting idea generation, project development, and application of technology to solve scientific challenges.',
  },
]

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/perfil.jpg"
                alt="Marcelo Surco"
                width={280}
                height={280}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.heroContent}>
              <p className={styles.heroLabel}>Founding Engineer · Software Engineer</p>
              <h1 className={styles.heroTitle}>Marcelo Surco</h1>
              <p className={styles.heroSubtitle}>
                I build and lead technical teams on products that scale — from AI underwriting platforms to real-time web apps. Full Stack, system design, and mentoring. Focus on impact and clean architecture.
              </p>
              <p className={styles.heroMeta}>Full Stack · System design · AI/ML · Remote-first</p>
              <p className={styles.heroLang}>English (B2–C1) · Spanish (Native)</p>
              <a href="https://www.linkedin.com/in/marcelo-juan-surco-salas/" target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
                Get in touch →
              </a>
            </div>
          </div>
        </header>

        {/* Skills + Education + Experience */}
        <section className={styles.section}>
          <div className={styles.twoCol}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Tech & tools</h2>
              <ul className={styles.skillsList}>
                {skills.map((skill, i) => (
                  <Skill
                    key={i}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <ul className={styles.studyList}>
                  {study.map((item, i) => (
                    <Study
                      key={i}
                      name={item.name}
                      age={item.age}
                      description={item.description}
                    />
                  ))}
                </ul>
              </div>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.experienceList}>
                  {experience.map((job, i) => (
                    <div key={i} className={styles.experienceItem}>
                      <div className={styles.experienceHeader}>
                        <h3 className={styles.experienceRole}>{job.role}</h3>
                        <span className={styles.experiencePeriod}>{job.period}</span>
                      </div>
                      <p className={styles.experienceCompany}>
                        {job.link ? (
                          <a href={job.link} target="_blank" rel="noopener noreferrer">{job.company}</a>
                        ) : (
                          job.company
                        )}
                      </p>
                      <p className={styles.experienceDesc}>{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notable Achievements */}
        <section className={styles.section}>
          <h2 className={styles.portfolioTitle}>Recognition</h2>
          <div className={styles.achievementsList}>
            {achievements.map((item, i) => (
              <div key={i} className={styles.card}>
                <h3 className={styles.achievementTitle}>{item.title}</h3>
                <p className={styles.achievementDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className={styles.section}>
          <h2 className={styles.portfolioTitle}>Selected Work</h2>
          <p className={styles.portfolioSubtitle}>
            Product and engineering work — from 0→1 and scaling in production.
          </p>
          <div className={styles.portfolioGrid}>
            {portafolio.map((proyecto, i) => (
              <Proyecto
                key={i}
                img={proyecto.img}
                name={proyecto.name}
                description={proyecto.description}
                link={proyecto.link}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
