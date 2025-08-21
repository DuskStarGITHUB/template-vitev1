/**
 * =====================================================
 *  NAME    : App.tsx
 *  DESCRIPTION: joined routers
 * =====================================================
 */

// ROUTERS
import ModulesRouter from "./routers/modulesRouter.tsx";

// DEPLOY
export default function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl">HELLO!</h1>
        <p className="mt-2">VITE||REACT||TS||TAILWIND|SHADCN && LUCIDE-REACT</p>
      </div>
      <ModulesRouter />
    </>
  );
}
