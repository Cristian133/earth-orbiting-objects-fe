import type { Environment } from './environment.d';

export const environment: Environment = {
  production: true,
  staging: false,
  apiUrl: 'https://api.example.com/api',
  apiTimeout: 30000,
  enableDebugTools: false,
  logLevel: 'error',
  features: {
    enableAnalytics: true,
    enableServiceWorker: true,
  },
};
