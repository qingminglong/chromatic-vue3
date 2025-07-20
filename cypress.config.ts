import { defineConfig } from 'cypress'

import { installPlugin } from '@chromatic-com/cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    setupNodeEvents(on, config) {
      installPlugin(on, config)
    },
  },
})
