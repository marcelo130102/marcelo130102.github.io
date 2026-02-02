import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiAmazonwebservices,
  SiDocker,
  SiTailwindcss,
  SiSupabase,
  SiOpenai,
} from 'react-icons/si'
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
} from 'react-icons/fa'
import styles from '../styles/Skill.module.css'

const iconMap = {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiAmazonwebservices,
  SiDocker,
  SiTailwindcss,
  SiSupabase,
  SiOpenai,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
}

export default function Skill({ name, icon }) {
  const IconComponent = iconMap[icon]
  return (
    <li className={styles.skill}>
      {IconComponent && <IconComponent className={styles.icon} aria-hidden />}
      <span className={styles.name}>{name}</span>
    </li>
  )
}
