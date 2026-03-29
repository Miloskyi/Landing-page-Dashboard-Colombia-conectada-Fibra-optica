import React, { useRef, useEffect, useState } from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Hallazgos.module.css'

const REGIONS = [
  { name: 'Centro Oriente', mun: 316, pct: 42.0, color: '#ff6b6b' },
  { name: 'Pacífico',       mun: 131, pct: 16.9, color: '#0abde3' },
  { name: 'Caribe',         mun: 130, pct: 15.3, color: '#feca57' },
  { name: 'Centro Sur',     mun: 95,  pct: 11.3, color: '#1dd1a1' },
  { name: 'Eje Cafetero',   mun: 68,  pct: 8.0,  color: '#a29bfe' },
  { name: 'Llano',          mun: 48,  pct: 6.6,  color: '#fd9644' },
]

const TOP5 = [
  { medal: '🥇', name: 'Boyacá',       mun: 117, inv: '$150.4B' },
  { medal: '🥈', name: 'Cundinamarca', mun: 89,  inv: '$119.6B' },
  { medal: '🥉', name: 'Santander',    mun: 78,  inv: '$111.2B' },
  { medal: '4°', name: 'Nariño',       mun: 62,  inv: '$82.1B'  },
  { medal: '5°', name: 'Bolívar',      mun: 41,  inv: '$54.2B'  },
]

function AnimatedBar({ pct, color, delay = 0 }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setWidth(pct), delay); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct, delay])
  return (
    <div ref={ref} className={styles.barTrack}>
      <div className={styles.barFill} style={{ width: `${width}%`, background: color, transition: `width 1.2s ease ${delay}ms` }}>
        <span>{pct}%</span>
      </div>
    </div>
  )
}

export default function Hallazgos() {
  return (
    <section className={styles.section} id="hallazgos">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>03 · Hallazgos</div>
          <h2 className={styles.title}>Principales Hallazgos<br /><em>del Análisis</em></h2>
          <p className={styles.sub}>
            El análisis revela patrones críticos sobre la distribución de la inversión,
            la cobertura geográfica y la sostenibilidad del proyecto.
          </p>
        </FadeSection>

        {/* KPI strip */}
        <FadeSection>
          <div className={styles.kpiStrip}>
            {[
              { val: '43.1%', lbl: 'Aporte FONTIC', sub: '$435.166M COP', color: 'coral' },
              { val: '56.9%', lbl: 'Contrapartida privada', sub: '$575.736M COP', color: 'teal' },
              { val: '$1.28M', lbl: 'Inversión promedio', sub: 'por municipio (COP)', color: 'amber' },
              { val: '97.1%', lbl: 'Proyectos 2013–2014', sub: '769 de 788 proyectos', color: 'emerald' },
            ].map(k => (
              <div key={k.lbl} className={`${styles.kpi} ${styles[k.color + 'Kpi']}`}>
                <span className={styles.kpiVal}>{k.val}</span>
                <span className={styles.kpiLbl}>{k.lbl}</span>
                <span className={styles.kpiSub}>{k.sub}</span>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Hallazgos cards */}
        <div className={styles.cardsGrid}>
          <FadeSection delay={0}>
            <div className={styles.card}>
              <div className={styles.cardTag} style={{ background: '#ff6b6b' }}>H1</div>
              <h4>Concentración Regional</h4>
              <p>La Región Centro Oriente concentra el <strong>42%</strong> de la inversión total con 316 municipios, mientras Llano solo recibe el 6.6% con 48 municipios.</p>
              <div className={styles.barRow}>
                <span>Centro Oriente</span>
                <AnimatedBar pct={42} color="#ff6b6b" />
              </div>
              <div className={styles.barRow}>
                <span>Llano</span>
                <AnimatedBar pct={6.6} color="#fd9644" delay={200} />
              </div>
            </div>
          </FadeSection>

          <FadeSection delay={100}>
            <div className={styles.card}>
              <div className={styles.cardTag} style={{ background: '#0abde3' }}>H2</div>
              <h4>Modelo de Corresponsabilidad</h4>
              <p>El 56.9% de la inversión proviene de contrapartidas privadas. Municipios con menor capacidad fiscal enfrentan tensiones al asumir aportes elevados.</p>
              <div className={styles.donutWrap}>
                <svg viewBox="0 0 120 120" className={styles.donut}>
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#f1f1f1" strokeWidth="18"/>
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#ff6b6b" strokeWidth="18"
                    strokeDasharray="120.6 282.7" strokeDashoffset="70.7" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#0abde3" strokeWidth="18"
                    strokeDasharray="160.7 282.7" strokeDashoffset="-211.3" strokeLinecap="round" opacity="0.85"/>
                  <text x="60" y="55" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a1a2e" fontFamily="Playfair Display">56.9%</text>
                  <text x="60" y="70" textAnchor="middle" fontSize="8" fill="#888">Contrapartida</text>
                </svg>
                <div className={styles.donutLegend}>
                  <span><i style={{background:'#ff6b6b'}}/>FONTIC 43.1%</span>
                  <span><i style={{background:'#0abde3'}}/>Contrapartida 56.9%</span>
                </div>
              </div>
            </div>
          </FadeSection>

          <FadeSection delay={200}>
            <div className={styles.card}>
              <div className={styles.cardTag} style={{ background: '#feca57', color: '#333' }}>H3</div>
              <h4>Concentración Temporal</h4>
              <p>452 proyectos iniciaron en 2013 y 317 en 2014, representando el <strong>97.1%</strong> del total. Solo 2 proyectos se registraron en 2023.</p>
              <div className={styles.miniBarChart}>
                {[452,317,8,3,2,1,1,1,1,1,2].map((v,i) => (
                  <div key={i} className={styles.miniBar} style={{
                    height: `${(v/452)*100}%`,
                    background: i < 2 ? '#feca57' : '#e0e0e0',
                    opacity: i < 2 ? 1 : 0.6
                  }} title={`${2013+i}: ${v}`}/>
                ))}
              </div>
              <div className={styles.miniBarLabels}>
                <span>2013</span><span>2014</span><span style={{marginLeft:'auto'}}>2023</span>
              </div>
            </div>
          </FadeSection>

          <FadeSection delay={300}>
            <div className={styles.card}>
              <div className={styles.cardTag} style={{ background: '#1dd1a1' }}>H4</div>
              <h4>Top 5 Departamentos</h4>
              <p>Boyacá lidera con 117 municipios y $150.4B COP (14.9%), seguido de Cundinamarca, Santander, Nariño y Bolívar.</p>
              <table className={styles.table}>
                <tbody>
                  {TOP5.map(r => (
                    <tr key={r.name}>
                      <td>{r.medal}</td>
                      <td><strong>{r.name}</strong></td>
                      <td>{r.mun} mun.</td>
                      <td className={styles.inv}>{r.inv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeSection>
        </div>

        {/* Region bars */}
        <FadeSection>
          <h3 className={styles.subTitle}>Distribución por Región Geográfica</h3>
          <div className={styles.regionBars}>
            {REGIONS.map((r, i) => (
              <div key={r.name} className={styles.regionRow}>
                <span className={styles.regionName}>{r.name}</span>
                <AnimatedBar pct={r.pct} color={r.color} delay={i * 150} />
                <span className={styles.regionMun}>{r.mun} mun.</span>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}
