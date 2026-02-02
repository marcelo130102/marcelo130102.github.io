import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          Marcelo Surco
        </Link>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className={open ? styles.open : ''} />
          <span className={open ? styles.open : ''} />
          <span className={open ? styles.open : ''} />
        </button>
        <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li>
            <a href="https://github.com/marcelo130102" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
