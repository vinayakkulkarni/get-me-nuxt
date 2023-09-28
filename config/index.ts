import type { NuxtConfig } from 'nuxt/schema';
import { head } from './head';

const DEV = process.env.NODE_ENV !== 'production';

const app: NuxtConfig['app'] = {
  head,
};

const components: NuxtConfig['components'] = false;

const css: NuxtConfig['css'] = [
  '@unocss/reset/tailwind.css',
  '~/assets/css/global.css',
  '~/assets/css/fonts.css',
];

const debug: NuxtConfig['debug'] = DEV;

const dev: NuxtConfig['dev'] = DEV;

const devtools: NuxtConfig['devtools'] = {
  enabled: DEV,
};

const devServer: NuxtConfig['devServer'] = {
  port: Number(process.env.NITRO_PORT) || 3000,
};

const experimental: NuxtConfig['experimental'] = {
  asyncEntry: true,
  emitRouteChunkError: 'automatic',
  typescriptBundlerResolution: true,
  viewTransition: true,
  componentIslands: true,
  payloadExtraction: true,
  typedPages: true,
};

const nitro: NuxtConfig['nitro'] = {
  future: {
    nativeSWR: true,
  },
  prerender: {
    crawlLinks: true,
  },
};

const plugins: NuxtConfig['plugins'] = [
  { src: '~/plugins/v-click-outside', mode: 'client' },
];

const routeRules: NuxtConfig['routeRules'] = {
  // Homepage pre-rendered at build time
  '/': { prerender: true },
};

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    appVersion: process.env.npm_package_version,
  },
};

const ssr: NuxtConfig['ssr'] = false;

const typescript: NuxtConfig['typescript'] = {
  strict: true,
  shim: false,
};

export { modules } from './modules';
export {
  app,
  components,
  css,
  debug,
  dev,
  devServer,
  devtools,
  experimental,
  nitro,
  plugins,
  routeRules,
  runtimeConfig,
  ssr,
  typescript,
};
