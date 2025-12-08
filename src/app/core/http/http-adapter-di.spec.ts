import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { describe, it, expect } from 'vitest';
import { HTTP_ADAPTER, provideHttpAdapter } from './http-adapter-di';
import type { HttpAdapter } from './http-adapter.interface';
import { AngularHttpAdapter } from './angular-http-adapter';

describe('HTTP Adapter Dependency Injection', () => {
  describe('HTTP_ADAPTER token', () => {
    it('should provide AngularHttpAdapter via root injector', () => {
      const adapter = TestBed.inject(HTTP_ADAPTER);

      expect(adapter).toBeInstanceOf(AngularHttpAdapter);
    });

    it('should be injectable as HttpAdapter interface', () => {
      const adapter: HttpAdapter = TestBed.inject(HTTP_ADAPTER);

      expect(adapter).toBeDefined();
      expect(typeof adapter.get).toBe('function');
      expect(typeof adapter.post).toBe('function');
      expect(typeof adapter.put).toBe('function');
      expect(typeof adapter.patch).toBe('function');
      expect(typeof adapter.delete).toBe('function');
    });
  });

  describe('provideHttpAdapter', () => {
    it('should return a valid ClassProvider', () => {
      const provider = provideHttpAdapter();

      expect(provider).toBeDefined();
      expect('provide' in provider).toBe(true);
      expect('useClass' in provider).toBe(true);
    });

    it('should allow overriding the default implementation', () => {
      TestBed.configureTestingModule({
        providers: [provideHttpClient(), provideHttpAdapter()],
      });

      const adapter = TestBed.inject(HTTP_ADAPTER);

      expect(adapter).toBeInstanceOf(AngularHttpAdapter);
    });
  });
});
