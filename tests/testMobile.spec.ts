import { test, expect } from '@playwright/test';
  
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('.sidebar-toggle').click();
  });
  
test.describe('Form layout page', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByText(/forms/i).click();
      await page.getByText(/form layouts/i).click();
      await page.locator('.sidebar-toggle').click();
    })
  
    test('input fields', async ({ page }) => {
      const usingTheGridEmailInput = page.locator("nb-card", { hasText: /using the grid/i }).getByRole('textbox', { name: /email/i });
  
      await usingTheGridEmailInput.fill('test@gmail.com');
    })
})