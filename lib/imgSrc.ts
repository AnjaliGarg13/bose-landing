// Prepends the basePath so images resolve correctly on GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set in .env.production and inlined at build time.
export const imgSrc = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
