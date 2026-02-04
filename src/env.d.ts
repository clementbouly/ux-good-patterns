/// <reference types="astro/client" />

// Vite raw imports (e.g., import content from "./file.md?raw")
declare module "*.md?raw" {
  const content: string;
  export default content;
}
