import { Page } from '@playwright/test'

export class FormLayoutsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator("nb-card", { hasText: /using the grid/i });

        await usingTheGridForm.getByRole('textbox', { name: /email/i }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: /password/i }).fill(password);
        await usingTheGridForm.getByRole("radio", { name: optionText }).check({ force: true });

        await usingTheGridForm.getByRole('button', { name: /sign in/i }).click();
    }

    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator("nb-card", { hasText: /inline form/i });

        await inlineForm.getByRole('textbox', { name: /jane doe/i }).fill(name);
        await inlineForm.getByRole('textbox', { name: /email/i }).fill(email);

        if (rememberMe) {
            await inlineForm.getByRole('checkbox').check({ force: true });
            await inlineForm.getByRole('button', { name: /submit/i }).click();
        }
    }
}