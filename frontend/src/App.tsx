/**
 * =====================================================
 *  NAME    : App.tsx
 *  DESCRIPTION: joined routers
 * =====================================================
 */

// ROUTERS && COMPONENTS
import ModulesRouter from "@/routers/modulesRouter";
import { ThemeProvider } from "@/components/app/ThemeToggle";

// DEPLOY
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ModulesRouter />
    </ThemeProvider>
  );
}
