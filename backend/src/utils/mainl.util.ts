/**
 * =====================================================
 *  NAME    : main.util.ts
 *  DESCRIPTION: functions for use in whatever module
 * =====================================================
 */

// VALID METHOD HTTP
export function isMethodAllowed(method: string): boolean {
  const allowedMethods = ['GET'];
  return allowedMethods.includes(method.toUpperCase());
}
