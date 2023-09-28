import type { NuxtConfig } from 'nuxt/schema';
import { config as unocss } from './unocss';

const modules: NuxtConfig['modules'] = [
  // https://vueuse.org/guide/#nuxt
  '@vueuse/nuxt',
  // https://unocss.dev/integrations/nuxt
  ['@unocss/nuxt', unocss],
];

export { modules };
