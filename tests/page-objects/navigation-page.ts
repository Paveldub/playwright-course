import { Locator, Page } from '@playwright/test'

export class NavigationPage {
    readonly page: Page;
    readonly formLayoutsMenuItem: Locator;
    readonly datepickerMenuItem: Locator;
    readonly smartTableMenuItem: Locator;
    readonly toastrMenuItem: Locator;
    readonly tooltipMenuItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formLayoutsMenuItem = page.getByText(/form layouts/i);
        this.datepickerMenuItem = page.getByText(/datepicker/i);
        this.smartTableMenuItem = page.getByText(/smart table/i);
        this.toastrMenuItem = page.getByText(/toastr/i);
        this.tooltipMenuItem = page.getByText(/tooltip/i);
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');

        if (expandedState === "false") {
            await groupMenuItem.click();
        }
    }
    
    async formLayoutsPage() {
        await this.selectGroupMenuItem("Forms");
        await this.formLayoutsMenuItem.click();
    }

    async datepickerPage() {
        await this.selectGroupMenuItem("Forms");
        await this.datepickerMenuItem.click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem("Tables & Data");
        await this.smartTableMenuItem.click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.toastrMenuItem.click();
    }

    async tooltipPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.tooltipMenuItem.click();
    }
}