import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, footer = true }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => nProgress.start()
    const handleComplete = () => nProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events])

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      {footer && (
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerBrand}>Marcelo Surco</p>
            <span className={styles.footerLinks}>
              <a href="https://www.linkedin.com/in/marcelo-juan-surco-salas/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
              <span className={styles.footerLinkSep}>·</span>
              <a href="https://github.com/marcelo130102" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
            </span>
            <p className={styles.footerCopy}>
              © 2022 – {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
