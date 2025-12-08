import type { Environment } from './environment.d';

export const environment: Environment = {
  production: false,
  staging: true,
  apiUrl: 'https://staging-api.example.com/api',
  apiTimeout: 30000,
  enableDebugTools: true,
  logLevel: 'info',
  features: {
    enableAnalytics: true,
    enableServiceWorker: true,
  },
};
