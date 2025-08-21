// modules/home/homeRouter.tsx
/**
 * =====================================================
 *  NAME    : homeRouter.tsx
 *  DESCRIPTION: module home init
 * =====================================================
 */

// JOINERS
import { ThemeProvider, ThemeToggle } from "./ThemeToggle";

// MODULE
export default function HomeRouter() {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <div
          style={{
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          <ThemeToggle />
          {/* NEW ROUTERS */}
        </div>
      </ThemeProvider>
    </>
  );
}
