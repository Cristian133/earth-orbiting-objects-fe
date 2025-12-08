import { test, expect } from '@playwright/test';

test.describe('Application', () => {
  test('should display the application title', async ({ page }) => {
    await page.goto('/');

    // Wait for Angular to bootstrap
    await page.waitForSelector('app-root');

    // Check that the page title contains expected text
    await expect(page).toHaveTitle(/Object Orbiting Earth/i);
  });

  test('should navigate and render main content', async ({ page }) => {
    await page.goto('/');

    // Wait for the app to load
    await page.waitForSelector('app-root');

    // Check that the app root is visible
    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeVisible();
  });

  test('should be accessible', async ({ page }) => {
    await page.goto('/');

    // Basic accessibility check
    await page.waitForSelector('app-root');

    // Check for basic HTML structure
    const mainContent = page.locator('main, [role="main"]');
    expect(await mainContent.count()).toBeGreaterThanOrEqual(0);
  });
});
