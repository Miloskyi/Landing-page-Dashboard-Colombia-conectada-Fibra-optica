import React from 'react'
import styles from './Footer.module.css'

export default function Footer({ dashboardUrl }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span>🔷</span>
          <span className={styles.brandText}>Colombia <em>Conectada</em></span>
        </div>
        <p className={styles.copy}>
          Proyecto Final · Análisis de Datos · 2026 ·
          Datos: <a href="https://www.datos.gov.co" target="_blank" rel="noreferrer">datos.gov.co</a> · MinTIC · FONTIC
        </p>
        <a href={dashboardUrl} target="_blank" rel="noreferrer" className={styles.btn}>
          Abrir Dashboard →
        </a>
      </div>
    </footer>
  )
}
