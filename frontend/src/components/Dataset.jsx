import React from 'react'
import FadeSection from './FadeSection.jsx'
import styles from './Dataset.module.css'

const vars = [
  { col: 'REGION',                 tipo: 'Texto',    desc: '6 macro-regiones geográficas' },
  { col: 'DEPARTAME_NOMBRE',       tipo: 'Texto',    desc: '27 departamentos cubiertos' },
  { col: 'MUNICIPIO_NOMBRE',       tipo: 'Texto',    desc: '788 municipios beneficiados' },
  { col: 'FECHA OPERACION',        tipo: 'Fecha',    desc: 'Inicio del contrato' },
  { col: 'INVERSION FONTIC',       tipo: 'Numérico', desc: 'Aporte estatal (COP)' },
  { col: 'INVERSION CONTRAPARTIDA',tipo: 'Numérico', desc: 'Aporte operador privado' },
  { col: 'INVERSION TOTAL',        tipo: 'Numérico', desc: 'Suma del proyecto' },
]

const stack = ['🐍 Python 3.x','🐼 Pandas','🗄️ MySQL','📊 Streamlit','📈 Matplotlib','🎨 Seaborn','⚛️ React','🟢 Node.js']

export default function Dataset() {
  return (
    <section className={styles.section} id="datos">
      <div className={styles.container}>
        <FadeSection>
          <div className={styles.label}>05 · Dataset & Base de Datos</div>
          <h2 className={styles.title}>Arquitectura<br /><em>de Datos</em></h2>
          <p className={styles.sub}>
            Esquema relacional normalizado en MySQL (3NF) con integridad referencial
            completa y vistas especializadas para consultas analíticas.
          </p>
        </FadeSection>

        <div className={styles.layout}>
          <FadeSection delay={0}>
            <div className={styles.schemaCard}>
              <h4 className={styles.schemaTitle}>Modelo Entidad-Relación</h4>
              <div className={styles.tables}>
                {[
                  { name: 'región', type: 'catalog', fields: [{ pk: true, name: 'id_region (PK)' }, { name: 'nombre_region' }] },
                  { name: 'departamento', type: 'catalog', fields: [{ pk: true, name: 'cod_departamento (PK)' }, { fk: true, name: 'id_region (FK)' }, { name: 'nombre_departamento' }] },
                  { name: 'municipio', type: 'catalog', fields: [{ pk: true, name: 'cod_municipio (PK)' }, { fk: true, name: 'cod_departamento (FK)' }, { name: 'nombre_municipio' }] },
                  { name: 'proyecto_fibra ⭐', type: 'facts', fields: [
                    { pk: true, name: 'id_proyecto (PK)' }, { fk: true, name: 'cod_municipio (FK)' },
                    { fk: true, name: 'id_indicador (FK)' }, { name: 'fecha_operacion' },
                    { name: 'inversion_fontic' }, { name: 'inversion_contrapartida' }, { name: 'inversion_total' },
                  ]},
                ].map(t => (
                  <div key={t.name} className={`${styles.dbTable} ${t.type === 'facts' ? styles.factsTable : ''}`}>
                    <div className={`${styles.tableHeader} ${t.type === 'facts' ? styles.factsHeader : ''}`}>{t.name}</div>
                    {t.fields.map(f => (
                      <div key={f.name} className={`${styles.tableRow} ${f.pk ? styles.pk : ''} ${f.fk ? styles.fk : ''}`}>
                        {f.pk ? '🔑 ' : f.fk ? '🔗 ' : '· '}{f.name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.views}>
                <span className={styles.viewTag}>📊 v_inversion_por_departamento</span>
                <span className={styles.viewTag}>📊 v_inversion_por_region</span>
              </div>
            </div>
          </FadeSection>

          <div className={styles.infoCol}>
            <FadeSection delay={100}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🗄️</div>
                <h4>Fuente del Dataset</h4>
                <p>MinTIC · FONTIC — Proyecto Nacional de Fibra Óptica</p>
                <p><strong>Período:</strong> Enero 2013 – Julio 2023</p>
                <p><strong>Actualización:</strong> Octubre 2023</p>
              </div>
            </FadeSection>
            <FadeSection delay={200}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🔧</div>
                <h4>Stack Tecnológico</h4>
                <div className={styles.stackGrid}>
                  {stack.map(s => <span key={s} className={styles.stackItem}>{s}</span>)}
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={300}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📋</div>
                <h4>Variables Clave</h4>
                <table className={styles.varTable}>
                  <tbody>
                    {vars.map(v => (
                      <tr key={v.col}>
                        <td><code>{v.col}</code></td>
                        <td><span className={styles.tipo}>{v.tipo}</span></td>
                        <td>{v.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeSection>
          </div>
        </div>
      </div>
    </section>
  )
}
