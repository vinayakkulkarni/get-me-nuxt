import type { NuxtAppConfig } from 'nuxt/schema';

const head: NuxtAppConfig['head'] = {
  title: 'Get Me Nuxt 💚',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Template repository for fully loaded Nuxt',
    },
    { name: 'msapplication-TileColor', content: '#303030' },
    { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
    { name: 'theme-color', content: '#303030' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
  noscript: [
    {
      innerHTML: 'This application requires JavaScript.',
    },
  ],
};

export { head };
