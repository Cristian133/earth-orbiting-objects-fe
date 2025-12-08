export interface Environment {
  production: boolean;
  staging: boolean;
  apiUrl: string;
  apiTimeout: number;
  enableDebugTools: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  features: {
    enableAnalytics: boolean;
    enableServiceWorker: boolean;
  };
}
