import { Page } from '@playwright/test'
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
    constructor(page: Page) {
        super(page)
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
        await this.page.getByText(/form layouts/i).click();
        await this.waitForNumberOfSeconds(2);
    }

    async datepickerPage() {
        await this.selectGroupMenuItem("Forms");
        await this.page.getByText(/datepicker/i).click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem("Tables & Data");
        await this.page.getByText(/smart table/i).click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.page.getByText(/toastr/i).click();
    }

    async tooltipPage() {
        await this.selectGroupMenuItem("Modal & Overlays");
        await this.page.getByText(/tooltip/i).click();
    }
}