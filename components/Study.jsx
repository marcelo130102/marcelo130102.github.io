import styles from '../styles/Study.module.css'

export default function Study({ name, age, description }) {
  return (
    <li className={styles.item}>
      <div className={styles.bullet} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.age}>{age}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  )
}
