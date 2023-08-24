/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface Window {
  _turnstileCb: () => void;
}

interface DocumentEventMap {
  "astro:load";
  "astro:beforeload";
}

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITEKEY: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
