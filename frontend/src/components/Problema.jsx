import React from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Problema.module.css'

const items = [
  { icon: '📡', title: 'Desigualdad de Acceso', color: 'coral',
    text: 'Las zonas rurales y periféricas carecen de internet de alta velocidad, generando un círculo vicioso que amplifica brechas en educación, salud y emprendimiento.' },
  { icon: '💸', title: 'Gestión de Recursos', color: 'teal',
    text: 'Un proyecto de 788 municipios requiere herramientas robustas para monitorear cobertura, evaluar eficiencia financiera y anticipar riesgos operativos.' },
  { icon: '📋', title: 'Transparencia Pública', color: 'amber',
    text: 'Sin un sistema adecuado de análisis y visualización, la toma de decisiones sobre expansión y renovación de contratos se ve limitada.' },
  { icon: '⏰', title: 'Vencimiento de Contratos', color: 'emerald',
    text: 'El 97.1% de los proyectos inició entre 2013–2014, lo que implica que una proporción significativa de contratos requerirá renovación en los próximos años.' },
]

export default function Problema() {
  return (
    <section className={styles.section} id="problema">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>01 · Problemática</div>
          <h2 className={styles.title}>La Brecha Digital<br /><em>en Colombia</em></h2>
          <p className={styles.sub}>
            A pesar de los avances en conectividad, persisten disparidades profundas entre
            zonas urbanas y rurales que reproducen desigualdades socioeconómicas.
          </p>
        </FadeSection>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <FadeSection key={item.title} delay={i * 100}>
              <div className={`${styles.card} ${styles[item.color]}`}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}
