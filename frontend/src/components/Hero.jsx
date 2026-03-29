import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const STATS = [
  { value: 788,    suffix: '',         label: 'Municipios cubiertos',    color: 'coral' },
  { value: 27,     suffix: '',         label: 'Departamentos',           color: 'teal'  },
  { value: 6,      suffix: '',         label: 'Regiones geográficas',    color: 'amber' },
  { value: 1.01,   suffix: 'B COP',   label: 'Inversión total',         color: 'emerald'},
]

function Counter({ value, suffix, color }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const isDecimal = value % 1 !== 0
        const duration = 1800
        const steps = 60
        let step = 0
        const timer = setInterval(() => {
          step++
          const progress = step / steps
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = value * eased
          el.textContent = isDecimal
            ? `$${current.toFixed(2)}${suffix}`
            : `${Math.floor(current).toLocaleString('es-CO')}${suffix}`
          if (step >= steps) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])

  return <span ref={ref} className={`${styles.statVal} ${styles[color]}`}>0</span>
}

export default function Hero({ dashboardUrl }) {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <div className={styles.container}>
        <div className={styles.badges}>
          <span className={styles.badge}>🇨🇴 Colombia</span>
          <span className={styles.badge}>📡 Fibra Óptica</span>
          <span className={styles.badge}>🗓 2013 – 2023</span>
          <span className={styles.badge}>📊 Análisis de Datos</span>
        </div>

        <h1 className={styles.title}>
          Análisis de Infraestructura<br />
          Nacional de{' '}
          <em className={styles.highlight}>Fibra Óptica</em>
          <br />
          <span className={styles.subtitle}>para el Desarrollo Regional</span>
        </h1>

        <p className={styles.desc}>
          Un estudio integral sobre la inversión, cobertura y despliegue del Proyecto
          Nacional de Fibra Óptica en Colombia — <strong>788 municipios</strong>,{' '}
          <strong>27 departamentos</strong>, más de{' '}
          <strong>$1 billón COP</strong> en infraestructura digital para cerrar la
          brecha de conectividad.
        </p>

        <div className={styles.cta}>
          <a href="#hallazgos" className={styles.btnPrimary}>Explorar Hallazgos</a>
          <a href={dashboardUrl} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
            Ver Dashboard Interactivo →
          </a>
        </div>

        <div className={styles.statsGrid}>
          {STATS.map(s => (
            <div key={s.label} className={`${styles.statCard} ${styles[`card_${s.color}`]}`}>
              <Counter value={s.value} suffix={s.suffix} color={s.color} />
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Desplázate para explorar</span>
        <div className={styles.arrow} />
      </div>
    </section>
  )
}
