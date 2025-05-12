import { test as base } from '@playwright/test';

export type TestOptions = {
    globalQAURL: string;
    globalProdURL: string;
    formLayoutsPageURL: string;
}

export const test = base.extend<TestOptions>({
    globalQAURL: ['', { option: true }],
    globalProdURL: ['', { option: true }],
    
    formLayoutsPageURL: async ({ page }, use) => {
        await page.goto('/');
        await page.getByText(/forms/i).click();
        await page.getByText(/form layouts/i).click();

        await use('');
    },
});
