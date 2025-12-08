import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { HttpAdapter, HttpAdapterOptions } from './http-adapter.interface';

/**
 * Angular HttpClient implementation of the HttpAdapter interface.
 * This adapter delegates all HTTP operations to Angular's HttpClient.
 *
 * @example
 * ```typescript
 * // Use through dependency injection
 * const httpAdapter = inject(HTTP_ADAPTER);
 * httpAdapter.get<User[]>('/api/users').subscribe(users => {
 *   console.log(users);
 * });
 * ```
 */
@Injectable()
export class AngularHttpAdapter implements HttpAdapter {
  private readonly http = inject(HttpClient);

  get<T>(url: string, options?: HttpAdapterOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  patch<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T> {
    return this.http.patch<T>(url, body, options);
  }

  delete<T>(url: string, options?: HttpAdapterOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
