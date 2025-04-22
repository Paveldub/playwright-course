import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test.describe('Forms Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText(/forms/i).click();
  });
  
  test('should navigate to Form Layouts', async ({ page }) => {
    await page.getByText(/form layouts/i).click();
  });
  
  test('should navigate to Datepicker', async ({ page }) => {
    await page.getByText(/datepicker/i).click();
  });
});

test.describe('Charts Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Charts', { exact: true }).click();
  });
  
  test('should navigate to Echarts', async ({ page }) => {
    await page.getByText(/echarts/i).click();
  });
});