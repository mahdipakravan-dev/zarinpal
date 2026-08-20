/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIARA_AI_URL?: string;
  readonly VITE_LIARA_AI_API_KEY?: string;
  readonly VITE_LIARA_AI_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
