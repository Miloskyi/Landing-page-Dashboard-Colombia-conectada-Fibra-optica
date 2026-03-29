import React from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Metodologia.module.css'

const steps = [
  { num: '01', title: 'Recopilación y Limpieza', color: 'coral',
    text: 'Dataset oficial con 788 registros y 14 variables — información geográfica, financiera y temporal. Validación de calidad e identificación de inconsistencias.',
    tags: ['Python', 'Pandas', 'CSV'] },
  { num: '02', title: 'Diseño de Base de Datos', color: 'teal',
    text: 'Esquema relacional en MySQL normalizado hasta 3NF con 5 tablas: región, departamento, municipio, indicador y proyecto_fibra (tabla de hechos).',
    tags: ['MySQL', 'InnoDB', 'UTF8MB4'] },
  { num: '03', title: 'Consultas SQL y Python', color: 'amber',
    text: 'Más de 20 consultas SQL especializadas: resumen general, análisis por región, control de calidad, análisis temporal y de financiación.',
    tags: ['SQL', 'Python', 'Matplotlib'] },
  { num: '04', title: 'Visualización Interactiva', color: 'emerald',
    text: 'Dashboards con Streamlit: KPIs ejecutivos, gráficos comparativos, filtros dinámicos por región/departamento y tablas de datos detalladas.',
    tags: ['Streamlit', 'Seaborn', 'Plotly'] },
  { num: '05', title: 'Comunicación de Resultados', color: 'purple',
    text: 'Landing page estructurada que presenta hallazgos, metodología y recomendaciones de forma accesible para técnicos y tomadores de decisiones.',
    tags: ['React', 'CSS', 'Express'] },
]

export default function Metodologia() {
  return (
    <section className={styles.section} id="metodologia">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>02 · Metodología</div>
          <h2 className={styles.title}>Enfoque Técnico<br /><em>Integral</em></h2>
          <p className={styles.sub}>
            Cinco etapas secuenciales que integran múltiples herramientas tecnológicas
            para garantizar trazabilidad, reproducibilidad y rigor analítico.
          </p>
        </FadeSection>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <FadeSection key={s.num} delay={i * 120} className={styles.item}>
              <div className={`${styles.numBadge} ${styles[s.color]}`}>{s.num}</div>
              <div className={styles.body}>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepText}>{s.text}</p>
                <div className={styles.tags}>
                  {s.tags.map(t => (
                    <span key={t} className={`${styles.tag} ${styles[s.color + 'Tag']}`}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}
