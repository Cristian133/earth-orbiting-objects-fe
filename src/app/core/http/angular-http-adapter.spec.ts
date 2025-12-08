import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { AngularHttpAdapter } from './angular-http-adapter';

describe('AngularHttpAdapter', () => {
  let adapter: AngularHttpAdapter;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), AngularHttpAdapter],
    });

    adapter = TestBed.inject(AngularHttpAdapter);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  describe('get', () => {
    it('should perform GET request and return data', () => {
      const testUrl = '/api/test';
      const mockData = { id: 1, name: 'Test' };

      adapter.get<typeof mockData>(testUrl).subscribe({
        next: (data) => {
          expect(data).toEqual(mockData);
        },
      });

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('should pass options to HttpClient', () => {
      const testUrl = '/api/test';
      const options = {
        headers: { Authorization: 'Bearer token' },
        params: { query: 'value' },
      };

      adapter.get(testUrl, options).subscribe();

      const req = httpTesting.expectOne(
        (request) => request.url === testUrl && request.params.get('query') === 'value'
      );
      expect(req.request.headers.get('Authorization')).toBe('Bearer token');
      req.flush({});
    });
  });

  describe('post', () => {
    it('should perform POST request with body', () => {
      const testUrl = '/api/test';
      const requestBody = { name: 'New Item' };
      const mockResponse = { id: 1, ...requestBody };

      adapter.post<typeof mockResponse>(testUrl, requestBody).subscribe({
        next: (data) => {
          expect(data).toEqual(mockResponse);
        },
      });

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(requestBody);
      req.flush(mockResponse);
    });

    it('should pass options to HttpClient', () => {
      const testUrl = '/api/test';
      const body = { data: 'test' };
      const options = { headers: { 'Content-Type': 'application/json' } };

      adapter.post(testUrl, body, options).subscribe();

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush({});
    });
  });

  describe('put', () => {
    it('should perform PUT request with body', () => {
      const testUrl = '/api/test/1';
      const requestBody = { id: 1, name: 'Updated Item' };

      adapter.put<typeof requestBody>(testUrl, requestBody).subscribe({
        next: (data) => {
          expect(data).toEqual(requestBody);
        },
      });

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(requestBody);
      req.flush(requestBody);
    });
  });

  describe('patch', () => {
    it('should perform PATCH request with body', () => {
      const testUrl = '/api/test/1';
      const requestBody = { name: 'Partial Update' };

      adapter.patch<typeof requestBody>(testUrl, requestBody).subscribe({
        next: (data) => {
          expect(data).toEqual(requestBody);
        },
      });

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.method).toBe('PATCH');
      expect(req.request.body).toEqual(requestBody);
      req.flush(requestBody);
    });
  });

  describe('delete', () => {
    it('should perform DELETE request', () => {
      const testUrl = '/api/test/1';

      adapter.delete(testUrl).subscribe();

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.method).toBe('DELETE');
      req.flush({});
    });

    it('should pass options to HttpClient', () => {
      const testUrl = '/api/test/1';
      const options = { headers: { Authorization: 'Bearer token' } };

      adapter.delete(testUrl, options).subscribe();

      const req = httpTesting.expectOne(testUrl);
      expect(req.request.headers.get('Authorization')).toBe('Bearer token');
      req.flush({});
    });
  });
});
