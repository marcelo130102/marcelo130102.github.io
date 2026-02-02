import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Page.module.css'

export default function Blog() {
  return (
    <Layout footer={false}>
      <div className={styles.page}>
        <div className={styles.box}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>Coming soon. Articles on development, tech, and more.</p>
          <Link href="/" className={styles.link}>
            ← Back to home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
