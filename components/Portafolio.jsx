import Image from 'next/image'
import styles from '../styles/Portafolio.module.css'

export default function Proyecto({ img, name, description, link }) {
  return (
    <article className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        </div>
      </a>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View project →
        </a>
      </div>
    </article>
  )
}
