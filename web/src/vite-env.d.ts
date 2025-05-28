/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FB_API: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
