import Layout from '../components/Layout'
import styles from '../styles/Flores.module.css'

export default function Flores() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>For you</h1>
        <div className={styles.container}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.flower}>
              <div className={styles.petal} />
              <div className={styles.petal} />
              <div className={styles.petal} />
              <div className={styles.petal} />
              <div className={styles.petal} />
              <div className={styles.petal} />
              <div className={styles.center} />
              <div className={styles.tallo} />
              <div className={styles.hoja} />
              <div className={styles.hoja1} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
