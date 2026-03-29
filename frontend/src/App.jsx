import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problema from './components/Problema.jsx'
import Metodologia from './components/Metodologia.jsx'
import Hallazgos from './components/Hallazgos.jsx'
import Recomendaciones from './components/Recomendaciones.jsx'
import Dataset from './components/Dataset.jsx'
import Equipo from './components/Equipo.jsx'
import Footer from './components/Footer.jsx'

const DASHBOARD_URL = 'https://e5nntmmggpdfspbsewpujq.streamlit.app/'

export default function App() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(setStats)
      .catch(() => setStats({
        municipios: 788, departamentos: 27, regiones: 6,
        inversion: '1.01B COP', fontic_pct: 43.1, contrap_pct: 56.9
      }))
  }, [])

  return (
    <>
      <Navbar dashboardUrl={DASHBOARD_URL} />
      <Hero stats={stats} dashboardUrl={DASHBOARD_URL} />
      <Problema />
      <Metodologia />
      <Hallazgos />
      <Recomendaciones />
      <Dataset />
      <Equipo />
      <Footer dashboardUrl={DASHBOARD_URL} />
    </>
  )
}
