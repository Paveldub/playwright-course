import { Page } from '@playwright/test'

export class NavigationPage {

    readonly page: Page;

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');

        if (expandedState === "false") {
            await groupMenuItem.click();
        }
    }
    
    constructor(page: Page) {
        this.page = page;
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem("Forms")
        await this.page.getByText("Form Layouts").click();
    }

    async datepickerPage() {
        await this.selectGroupMenuItem("Forms")
        await this.page.getByText(/datepicker/i).click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem("Tables & Data")
        await this.page.getByText(/smart table/i).click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem("Modal & Overlays")
        await this.page.getByText(/toastr/i).click();
    }

    async tooltipPage() {
        await this.selectGroupMenuItem("Modal & Overlays")
        await this.page.getByText(/tooltip/i).click();
    }
}