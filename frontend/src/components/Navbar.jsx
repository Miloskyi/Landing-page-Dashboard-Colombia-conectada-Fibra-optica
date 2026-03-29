import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#problema',        label: 'Problemática' },
  { href: '#metodologia',     label: 'Metodología' },
  { href: '#hallazgos',       label: 'Hallazgos' },
  { href: '#recomendaciones', label: 'Recomendaciones' },
  { href: '#equipo',          label: 'Equipo' },
]

export default function Navbar({ dashboardUrl }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoIcon}>🔷</span>
          <span className={styles.logoText}>Colombia <em>Conectada</em></span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? styles.activeLink : ''}
                onClick={() => setOpen(false)}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href={dashboardUrl} target="_blank" rel="noreferrer" className={styles.btnDash}>
              Ver Dashboard →
            </a>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
