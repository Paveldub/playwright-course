import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('naviget to form page', async ({ page }) => {
    const pageManager = new PageManager(page);

    await pageManager.navigateTo().formLayoutsPage();
    await pageManager.navigateTo().datepickerPage();
    await pageManager.navigateTo().smartTablePage();
    await pageManager.navigateTo().toastrPage();
    await pageManager.navigateTo().tooltipPage();
});

test("parametrized methods test", async({ page }) => {
    const pageManager = new PageManager(page);

    await pageManager.navigateTo().formLayoutsPage();

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "welcome1", "option 2");
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('Pavel', "test@gmail.com", true);

    await pageManager.navigateTo().datepickerPage();
    await pageManager.onDatePickerPage().selectCommonDatepickerDateFromToday(5);
    await pageManager.onDatePickerPage().selectDatepickerWithRangeFromToday(5, 15);
});
