import type { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import type { Observable } from 'rxjs';

/**
 * HTTP request options for the adapter.
 * Compatible with Angular's HttpClient options, but restricted to
 * requests that return the response body (observe: 'body' or undefined).
 */
export interface HttpAdapterOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | Record<string, string | number | boolean | readonly (string | number | boolean)[]>;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

/**
 * Generic HTTP adapter interface for abstracting HTTP operations.
 * This interface allows different HTTP client implementations to be used
 * interchangeably throughout the application.
 *
 * @example
 * ```typescript
 * class UserService {
 *   private httpAdapter = inject(HTTP_ADAPTER);
 *
 *   getUsers(): Observable<User[]> {
 *     return this.httpAdapter.get<User[]>('/api/users');
 *   }
 * }
 * ```
 */
export interface HttpAdapter {
  /**
   * Performs an HTTP GET request
   * @param url - The endpoint URL
   * @param options - Optional HTTP request options
   * @returns Observable of the response data
   */
  get<T>(url: string, options?: HttpAdapterOptions): Observable<T>;

  /**
   * Performs an HTTP POST request
   * @param url - The endpoint URL
   * @param body - The request body
   * @param options - Optional HTTP request options
   * @returns Observable of the response data
   */
  post<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T>;

  /**
   * Performs an HTTP PUT request
   * @param url - The endpoint URL
   * @param body - The request body
   * @param options - Optional HTTP request options
   * @returns Observable of the response data
   */
  put<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T>;

  /**
   * Performs an HTTP PATCH request
   * @param url - The endpoint URL
   * @param body - The request body
   * @param options - Optional HTTP request options
   * @returns Observable of the response data
   */
  patch<T>(url: string, body: unknown, options?: HttpAdapterOptions): Observable<T>;

  /**
   * Performs an HTTP DELETE request
   * @param url - The endpoint URL
   * @param options - Optional HTTP request options
   * @returns Observable of the response data
   */
  delete<T>(url: string, options?: HttpAdapterOptions): Observable<T>;
}
