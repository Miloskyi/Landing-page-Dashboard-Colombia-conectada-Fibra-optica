import React from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Recomendaciones.module.css'

const recs = [
  { icon: '🗺️', num: 'R1', color: 'coral', title: 'Expansión Focalizada',
    text: 'Diseñar planes específicos para las regiones Llano y Eje Cafetero. Priorizar municipios con mayor potencial de impacto socioeconómico considerando población, actividad económica y cercanía a nodos de red.' },
  { icon: '📅', num: 'R2', color: 'teal', title: 'Renovación Anticipada',
    text: 'Establecer un mecanismo sistemático con calendario de renovación al menos 24 meses antes del vencimiento de cada contrato, incluyendo evaluaciones de desempeño del operador.' },
  { icon: '⚖️', num: 'R3', color: 'amber', title: 'Equilibrio Financiero',
    text: 'Revisar la política de contrapartidas para municipios con menor capacidad fiscal. Crear un fondo de nivelación que complemente las contrapartidas en los municipios más vulnerables.' },
  { icon: '📊', num: 'R4', color: 'emerald', title: 'Monitoreo Continuo',
    text: 'Institucionalizar el uso de dashboards como herramienta de monitoreo permanente, incorporando indicadores adicionales: velocidad de conexión, usuarios conectados y disponibilidad del servicio.' },
]

const impacts = [
  { icon: '🎓', title: 'Inclusión Digital', text: 'Acceso a educación virtual, telemedicina y gobierno electrónico para millones de colombianos en zonas históricamente desatendidas.' },
  { icon: '💰', title: 'Eficiencia Financiera', text: 'Optimización del uso de recursos públicos y reducción del riesgo de interrupciones por vencimiento de contratos.' },
  { icon: '🔍', title: 'Transparencia', text: 'Acceso ciudadano a información actualizada sobre el estado y desempeño del proyecto para rendición de cuentas.' },
  { icon: '🚀', title: 'Desarrollo Regional', text: 'Impulso a la competitividad local, atracción de inversiones TIC y creación de ecosistemas de innovación distribuidos.' },
]

export default function Recomendaciones() {
  return (
    <section className={styles.section} id="recomendaciones">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>04 · Recomendaciones</div>
          <h2 className={styles.title}>Recomendaciones<br /><em>Estratégicas</em></h2>
          <p className={styles.sub}>
            Propuestas basadas en evidencia para fortalecer la cobertura, eficiencia
            financiera y sostenibilidad del Proyecto Nacional de Fibra Óptica.
          </p>
        </FadeSection>

        <div className={styles.grid}>
          {recs.map((r, i) => (
            <FadeSection key={r.num} delay={i * 100}>
              <div className={`${styles.card} ${styles[r.color]}`}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{r.icon}</span>
                  <span className={styles.num}>{r.num}</span>
                </div>
                <h4 className={styles.cardTitle}>{r.title}</h4>
                <p className={styles.cardText}>{r.text}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <div className={styles.impactBox}>
            <h3 className={styles.impactTitle}>Impacto Esperado</h3>
            <div className={styles.impactGrid}>
              {impacts.map((imp, i) => (
                <div key={imp.title} className={styles.impactItem}>
                  <div className={styles.impactIcon}>{imp.icon}</div>
                  <h5>{imp.title}</h5>
                  <p>{imp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}
