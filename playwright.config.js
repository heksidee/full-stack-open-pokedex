import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/', // minne testit laitetaan
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: 'http://localhost:3000', // frontin osoite
  },
  webServer: [
    {
      command: 'npm run start', // komento joka käynnistää front+back
      url: 'http://localhost:3000',
      name: 'Frontend',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'npm run start-prod',
      url: 'http://localhost:5000',
      name: 'Backend',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
