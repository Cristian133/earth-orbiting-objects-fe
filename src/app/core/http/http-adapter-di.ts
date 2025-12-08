import type { Provider } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { AngularHttpAdapter } from './angular-http-adapter';
import type { HttpAdapter } from './http-adapter.interface';

/**
 * Dependency Injection token for the HttpAdapter.
 * Use this token to inject the HTTP adapter in your services and components.
 *
 * @example
 * ```typescript
 * class MyService {
 *   private httpAdapter = inject(HTTP_ADAPTER);
 *
 *   getData(): Observable<Data> {
 *     return this.httpAdapter.get<Data>('/api/data');
 *   }
 * }
 * ```
 */
export const HTTP_ADAPTER = new InjectionToken<HttpAdapter>('HTTP_ADAPTER', {
  providedIn: 'root',
  factory: () => new AngularHttpAdapter(),
});

/**
 * Provider function for the HttpAdapter.
 * Add this to your application providers to enable HTTP adapter injection.
 *
 * @returns Provider configuration for the HTTP adapter
 *
 * @example
 * ```typescript
 * // In app.config.ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideHttpClient(),
 *     provideHttpAdapter(),
 *     // ... other providers
 *   ],
 * };
 * ```
 */
export function provideHttpAdapter(): Provider {
  return {
    provide: HTTP_ADAPTER,
    useClass: AngularHttpAdapter,
  };
}
