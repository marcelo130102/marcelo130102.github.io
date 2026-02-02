import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Page.module.css'

export default function Error({ statusCode }) {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.box}>
          {statusCode && <p className={styles.code}>{statusCode}</p>}
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.subtitle}>
            The page could not be loaded. Please try again.
          </p>
          <Link href="/" className={styles.link}>
            ← Back to home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
