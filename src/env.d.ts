type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

interface Window {
  /** Lenis instance from the layout, exposed so overlays can pause scrolling. */
  __lenis?: import("lenis").default;
}

/// <reference types="astro/client" />
