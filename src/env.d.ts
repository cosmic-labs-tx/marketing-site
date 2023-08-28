/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

declare global {
  interface Window {
    turnstile: TurnstileObject;
    _turnstileCb: TurnstileOptions["callback"];
    _turnstile_widget_id?: WidgetId;
  }

  interface DocumentEventMap {
    "astro:load";
    "astro:beforeload";
  }

  interface ImportMetaEnv {
    readonly PUBLIC_TURNSTILE_SITEKEY: string;
    readonly PUBLIC_UMAMI_WEBSITE_ID: string;
    readonly PUBLIC_GIT_BRANCH: string;
    readonly PUBLIC_GIT_COMMIT_SHA: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  type ElementId = string;
  type WidgetId = string;
  type Container = ElementId | HTMLElement;
  // Cloudflare Turnstile
  interface TurnstileObject {
    ready: () => void;
    implicitRender: () => void;
    execute: (container?: Container, options?: TurnstileOptions) => void;
    render: (container: Container, options: TurnstileOptions) => WidgetId;
    reset: (widget?: Container | WidgetId) => void;
    remove: (widget?: Container | WidgetId) => void;
    getResponse: (widget?: Container | WidgetId) => string | undefined;
  }

  interface TurnstileOptions {
    sitekey: string;
    action?: string;
    cData?: string;
    callback?: (token: string) => void;
    "error-callback"?: () => void;
    "expired-callback"?: (token: string) => void;
    "timeout-callback"?: () => void;
    theme?: "light" | "dark" | "auto"; // defaults to "auto"
    language?: SupportedLanguages | "auto"; // defaults to "auto"
    tabindex?: number; // defaults to 0
    "response-field"?: boolean; // defaults to true
    "response-field-name"?: string; // defaults to "cf-turnstile-response"
    size?: "normal" | "invisible" | "compact"; // defaults to "normal"
    retry?: "auto" | "never"; // defaults to "auto"
    "retry-interval"?: number; // up to 15m (900_000) in ms, defaults to 8s
    "refresh-expired"?: "auto" | "manual" | "never"; // defaults to "auto"
    appearance?: "always" | "execute" | "interaction-only";
    execution?: "render" | "execute";
  }

  type SupportedLanguages =
    | "ar-eg"
    | "de"
    | "en"
    | "es"
    | "fa"
    | "fr"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "nl"
    | "pl"
    | "pt-br"
    | "ru"
    | "tr"
    | "zh-cn"
    | "zh-tw";
}

export {};
