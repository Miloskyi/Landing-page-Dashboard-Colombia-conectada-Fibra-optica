import React from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Equipo.module.css'

const members = [
  { initials: 'CG', name: 'Camilo Gómez Rendón',                  role: 'Análisis de Datos',   color: 'coral'   },
  { initials: 'JP', name: 'Jefferson Alexander Patiño Hincapié',   role: 'Base de Datos SQL',   color: 'teal'    },
  { initials: 'DG', name: 'Damian Gutiérrez Gaviria',              role: 'Visualización',        color: 'amber'   },
  { initials: 'MG', name: 'Maria Dilia Gómez',                     role: 'Análisis de Datos',   color: 'emerald' },
  { initials: 'MS', name: 'Mariana Sánchez',                       role: 'Documentación',        color: 'purple'  },
  { initials: 'JS', name: 'Juan José Sánchez',                     role: 'Frontend',             color: 'coral'   },
]

export default function Equipo() {
  return (
    <section className={styles.section} id="equipo">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>06 · Equipo</div>
          <h2 className={styles.title}>Equipo de<br /><em>Proyecto</em></h2>
          <p className={styles.sub}>
            Estudiantes del curso de Análisis de Datos · Transición Energética y
            Tecnologías de Información · Marzo 2026
          </p>
        </FadeSection>

        <div className={styles.grid}>
          {members.map((m, i) => (
            <FadeSection key={m.name} delay={i * 80}>
              <div className={`${styles.card} ${styles[m.color]}`}>
                <div className={`${styles.avatar} ${styles['av_' + m.color]}`}>{m.initials}</div>
                <div className={styles.name}>{m.name}</div>
                <div className={styles.role}>{m.role}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}
