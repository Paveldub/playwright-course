import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

require('dotenv').config();

export default defineConfig<TestOptions>({
  retries: 1,
  reporter: 'html',
  use: {
    baseURL: process.env.LOCAL_URL || 'http://localhost:4200',
    globalQAURL: 'https://docs-snapsign-app-dev.firebaseapp.com/',
    globalProdURL: 'https://docs.snapsign-app.com/',
    trace: 'on-first-retry',
    video: 'off',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: { 
        browserName: 'firefox' 
      },
    },

    {
      name: 'webkit',
      use: { 
        browserName: 'webkit' 
      },
    },

    {
      name: 'dev',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: process.env.QA_URL || 'https://docs-snapsign-app-dev.firebaseapp.com/',
      },
    },

    {
      name: 'staging',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: process.env.PROD_URL || 'https://docs.snapsign-app.com/',
      },
    },

    {
      name: 'mobile',
      testMatch: ['testMobile.spec.ts'],
      use: { 
        ...devices['iPhone 13 Pro'],
      },
    }
  ],
});
