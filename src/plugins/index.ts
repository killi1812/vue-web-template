/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import pinia from '../stores'
import router from '../router'
import primeOptions from './prime'
import PrimeVue from 'primevue/config';

// Types
import type { App } from 'vue'
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app
    // .use(vuetify)
    .use(PrimeVue, primeOptions)
    .use(router)
    .use(pinia)
}
