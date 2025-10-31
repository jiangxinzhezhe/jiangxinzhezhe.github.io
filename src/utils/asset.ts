// src/utils/asset.ts
export function asset(p: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return `${base}${p.startsWith("/") ? p : `/${p}`}`;
}
