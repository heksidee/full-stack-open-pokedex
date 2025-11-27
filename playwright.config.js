import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/',
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5000',
  },
  webServer: [
    {
      command: 'npm run start',
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
