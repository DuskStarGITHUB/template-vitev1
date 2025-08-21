# 🚀 Template Fullstack - Vite + React + Tailwind V4 + Shadcn/ui + NestJS

Este repositorio es un **template fullstack** que combina **Frontend + Backend** en un solo entorno.  
La idea de un **template** es que, al clonarlo y ejecutar un simple comando, obtienes un **entorno completo de desarrollo** ya configurado, listo para empezar a programar.

---

## 📂 Estructura del proyecto

```markdown
template-vitev1/
│── backend/      → Servidor NestJS (Node.js + TypeScript)
│── frontend/     → Cliente React (Vite + TS + Tailwind + shadcn/ui)
│── package.json  → Scripts para iniciar toda la stack
```

---

### 🖥️ Backend (`backend/`)
- **Framework:** [NestJS](https://nestjs.com/)  
- **Runtime:** Node.js  
- **Lenguaje:** TypeScript  
- **Gestor de paquetes:** npm  

📂 Estructura del código:
```markdown
backend/src/
├── app.module.ts          → Módulo principal de la aplicación
├── main.ts               → Punto de entrada del servidor
└── server/               → Módulo de servidor (health check)
    ├── server.controller.ts      → Controlador - Maneja ruta GET / (RAIZ)
    ├── server.controller.spec.ts → Tests del controlador
    └── server.module.ts          → Módulo - Organiza dependencias
```

## 🎯 Arquitectura NestJS

📌 El backend responde en: **http://localhost:3000/** con:
```json
{
  "message": "Backend activo",
  "framework": "NestJS",
  "runtime": "Node.js",
  "packageManager": "npm",
  "language": "TypeScript",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

---

### 🌐 Frontend (`frontend/`)
- **Framework:** [React](https://react.dev/) con [Vite](https://vitejs.dev/)  
- **Lenguaje:** TypeScript  
- **Estilos:** [TailwindCSS](https://tailwindcss.com/)  
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [lucide-react](https://lucide.dev/)  

📂 Estructura del código:

```markdown
frontend/src/
├── components/           → Componentes reutilizables
│   ├── app/             → Componentes globales
│   │   └── ThemeToggle.tsx
│   └── ui/              → Componentes de UI (shadcn/ui)
│       └── button.tsx
├── lib/                 → Utilidades compartidas
│   └── utils.ts
├── modules/             → Módulos organizados por feature
│   ├── auth/            → Módulo de autenticación
│   │   ├── authPage.tsx
│   │   └── authRouter.tsx
│   └── home/            → Módulo de home
│       ├── homePage.tsx
│       └── homeRouter.tsx
├── routers/             → Definición de rutas
│   └── modulesRouter.tsx
├── App.tsx              → Componente raíz
├── main.tsx             → Punto de entrada
├── index.css            → Estilos globales
└── vite-env.d.ts        → Tipos de Vite
```

📌 El frontend se ejecuta en: **http://localhost:5173/** y muestra la interfaz React con shadcn/ui

---

## ⚡ Scripts disponibles

En el **package.json raíz** tienes scripts para manejar toda la stack:

```json
{
  "scripts": {
    "init": "npm install --prefix backend && npm install --prefix frontend",
    "stack": "concurrently \"npm run dev --prefix frontend\" \"npm run start:dev --prefix backend\""
  }
}
```

### 🔧 Inicializar proyecto

Instalar dependencias en **backend** y **frontend** con un solo comando:

```bash
npm i
npm run init
```

### 🚀 Iniciar desarrollo

Levantar **frontend + backend al mismo tiempo**:

```bash
npm run stack
```

### 🖥️ Ejecutar de forma individual

* **Frontend:**
  ```bash
  cd frontend
  npm run dev
  ```

* **Backend:**
  ```bash
  cd backend
  npm run start:dev
  ```

---

## 🎨 Añadir componentes de shadcn/ui

Este template ya está configurado con **shadcn/ui** y **TailwindCSS V4**.
Para añadir un componente nuevo:

1. Instalar el CLI (solo una vez, en el frontend):
   ```bash
   npx shadcn-ui init
   ```

2. Añadir un componente:
   ```bash
   npx shadcn-ui add button
   ```

3. El componente aparecerá en `frontend/src/components/ui/`
   y lo podrás importar en cualquier parte del proyecto:
   ```tsx
   import { Button } from "@/components/ui/button"

   export function Example() {
     return <Button>Click me</Button>
   }
   ```

---

