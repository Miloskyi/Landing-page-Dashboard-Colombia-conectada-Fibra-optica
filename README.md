# Colombia Conectada — Landing Page (React + Express)

## Estructura
```
landing-react/
  frontend/   → React 18 + Vite
  backend/    → Express (Node.js)
```

## Cómo correr

### 1. Backend (API)
```bash
cd landing-react/backend
npm install   # solo la primera vez
npm run dev   # corre en http://localhost:4000
```

### 2. Frontend (React)
```bash
cd landing-react/frontend
npm install   # solo la primera vez
npm run dev   # corre en http://localhost:3000
```

Abre http://localhost:3000 en el navegador.

> El frontend hace proxy automático de /api → localhost:4000
> Si no quieres correr el backend, igual funciona (usa datos fallback).
