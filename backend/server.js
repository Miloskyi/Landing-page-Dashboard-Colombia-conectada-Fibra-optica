import express from 'express'
import cors from 'cors'

const app  = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// ── Project stats ────────────────────────────
const PROJECT_STATS = {
  municipios:    788,
  departamentos: 27,
  regiones:      6,
  inversion:     '1.01B COP',
  fontic_pct:    43.1,
  contrap_pct:   56.9,
  periodo:       '2013 – 2023',
  fuente:        'MinTIC · FONTIC',
}

// ── Region data ──────────────────────────────
const REGIONS = [
  { name: 'Centro Oriente', municipios: 316, inversion_cop: 424700841225, pct: 42.0 },
  { name: 'Pacífico',       municipios: 131, inversion_cop: 170493636332, pct: 16.9 },
  { name: 'Caribe',         municipios: 130, inversion_cop: 154258584438, pct: 15.3 },
  { name: 'Centro Sur',     municipios: 95,  inversion_cop: 114355999950, pct: 11.3 },
  { name: 'Eje Cafetero',   municipios: 68,  inversion_cop: 80762533173,  pct: 8.0  },
  { name: 'Llano',          municipios: 48,  inversion_cop: 66330999999,  pct: 6.6  },
]

// ── Top departments ──────────────────────────
const TOP_DEPTS = [
  { rank: 1, name: 'Boyacá',       municipios: 117, inversion_cop: 150411857076, pct: 14.9 },
  { rank: 2, name: 'Cundinamarca', municipios: 89,  inversion_cop: 119604060917, pct: 11.8 },
  { rank: 3, name: 'Santander',    municipios: 78,  inversion_cop: 111222729696, pct: 11.0 },
  { rank: 4, name: 'Nariño',       municipios: 62,  inversion_cop: 82127999982,  pct: 8.1  },
  { rank: 5, name: 'Bolívar',      municipios: 41,  inversion_cop: 54192628548,  pct: 5.4  },
]

// ── Routes ───────────────────────────────────
app.get('/api/stats',   (_req, res) => res.json(PROJECT_STATS))
app.get('/api/regions', (_req, res) => res.json(REGIONS))
app.get('/api/top-departments', (_req, res) => res.json(TOP_DEPTS))

app.get('/api/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }))

app.listen(PORT, () => {
  console.log(`✅  API running → http://localhost:${PORT}`)
  console.log(`   GET /api/stats`)
  console.log(`   GET /api/regions`)
  console.log(`   GET /api/top-departments`)
})
