import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Page.module.css'

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.box}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.subtitle}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className={styles.link}>
            ← Back to home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
