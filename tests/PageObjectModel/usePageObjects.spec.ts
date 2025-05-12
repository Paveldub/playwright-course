import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
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
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(" ", "").toLowerCase()}${faker.number.int(1000)}@test.com`;
    const randomPassword = faker.internet.password();
    const randomOption = faker.helpers.arrayElement(["option 1", "option 2"]);

    const pageManager = new PageManager(page);

    await pageManager.navigateTo().formLayoutsPage();

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(randomEmail, randomPassword, randomOption);
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);

    // await pageManager.navigateTo().datepickerPage();
    // await pageManager.onDatePickerPage().selectCommonDatepickerDateFromToday(5);
    // await pageManager.onDatePickerPage().selectDatepickerWithRangeFromToday(5, 15);
});
