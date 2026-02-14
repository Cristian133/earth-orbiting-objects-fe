import { provideHttpClient } from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpAdapter } from './core/http';

// Define the base URL for Cesium assets
const cesiumBaseUrl = '/cesium';
(globalThis as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = cesiumBaseUrl;

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideHttpAdapter(),
  ],
};
