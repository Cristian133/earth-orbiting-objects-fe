import type { Environment } from './environment.d';

export const environment: Environment = {
  production: false,
  staging: false,
  apiUrl: 'http://localhost:3000/api',
  apiTimeout: 30000,
  enableDebugTools: true,
  logLevel: 'debug',
  features: {
    enableAnalytics: false,
    enableServiceWorker: false,
  },
};
