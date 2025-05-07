import { Page, expect } from '@playwright/test'

export class DatePickerPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private async selectDateInTheCalendar(numberOfDaysFromToday: number) {
        let date = new Date();
        
        date.setDate(date.getDate() + numberOfDaysFromToday);
        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' });
        const expectedYearShort = date.getFullYear();
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYearShort}`
    
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthYear = `${expectedMonthLong} ${expectedYearShort}`;
    
        while (!calendarMonthAndYear?.includes(expectedMonthYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();

            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        }
    
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, { exact: true }).click();
    
        return dateToAssert;
    }
    
    async selectCommonDatepickerDateFromToday(numberOfDaysFromToday: number) {
        const datepicker = this.page.getByPlaceholder('Form Picker');
        await datepicker.click();

        const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday);
        await expect(datepicker).toHaveValue(dateToAssert);
    }

    async selectDatepickerWithRangeFromToday(startDateFromToday: number, endDateFromToday: number) {
        const datepicker = this.page.getByPlaceholder('Range picker');
        await datepicker.click();

        const dateToAssertStart = await this.selectDateInTheCalendar(startDateFromToday);
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDateFromToday);

        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;

        await expect(datepicker).toHaveValue(dateToAssert);
    }
}