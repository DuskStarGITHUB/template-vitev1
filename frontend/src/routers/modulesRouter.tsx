// routers/modulesRouter.tsx
/**
 * =====================================================
 *  NAME    : modulesRouter.tsx
 *  DESCRIPTION: router modules
 * =====================================================
 */

// ROUTERS
import AuthRouter from "@/modules/auth/authRouter";
import HomeRouter from "@/modules/home/homeRouter";

// APP ASSEMBLY ROUTES
export default function ModulesRouter() {
  const token = localStorage.getItem("module");
  const isAuthenticated = token === "true";
  return <>{isAuthenticated ? <HomeRouter /> : <AuthRouter />}</>;
}
