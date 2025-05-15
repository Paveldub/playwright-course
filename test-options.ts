// fixtures makes test faster because it initialize before the test

import { test as base } from '@playwright/test';
import { PageManager } from './tests/page-objects/pageManager';

export type TestOptions = {
    globalQAURL: string;
    globalProdURL: string;
    formLayoutsPageURL: string;
    pageManager: PageManager;
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

    pageManager: async ({ page, formLayoutsPageURL }, use) => {
        const pageManager = new PageManager(page);

        await use(pageManager);
    }
});
