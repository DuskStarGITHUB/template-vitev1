# 🚀 Template Fullstack - Vite + React + Tailwind V4 + Shadcn/ui + NestJS

Este repositorio es un **template fullstack** que combina **Frontend + Backend** en un solo entorno.  
La idea de un **template** es que, al clonarlo y ejecutar un simple comando, obtienes un **entorno completo de desarrollo** ya configurado, listo para empezar a programar.
<img width="1359" height="632" alt="imagen" src="https://github.com/user-attachments/assets/0e69e197-e31e-4229-b5af-cdc24dc6e33f" />

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
├── controllers/   → Controladores (manejo de rutas)
│   └── main.controller.ts
├── middlewares/   → Middlewares personalizados
│   └── main.middleware.ts
├── services/      → Servicios (lógica de negocio)
│   └── main.service.ts
├── utils/         → Funciones de utilidad
│   └── main.util.ts
├── main.module.ts → Módulo raíz de NestJS
└── main.ts        → Punto de entrada
```

📌 Al iniciar, el backend responde con:  
```markdown
"Backend activo" # puerto: 3000
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
├── components/    → Componentes reutilizables
│   ├── app/       → Ejemplo de componentes globales
│   └── ui/        → Componentes de UI (shadcn/ui)
├── lib/           → Utilidades compartidas
├── modules/       → Módulos organizados por feature
│   ├── auth/      → Ejemplo de módulo de autenticación
│   └── home/      → Módulo de home con router y ThemeToggle
├── routers/       → Definición de rutas
├── App.tsx        → Componente raíz
├── main.tsx       → Punto de entrada
└── index.css      → Estilos globales
```

📌 Al iniciar, el frontend responde con:

```markdown
"HELLO!" # puerto: 5173
```

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


✨ Ahora solo clona este repo y empieza a construir tu aplicación fullstack.

---
