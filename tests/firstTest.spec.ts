import { test } from '@playwright/test';

test.describe('the second test', () => {
    test('should navigate to the homepage', async ({ page }) => {
        await page.goto('http://localhost:4200/');

        await page.getByText(/forms/i).click();
        await page.getByText(/form layouts/i).click();
    });
});
