import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigation-page';
import { FormLayoutsPage } from '../page-objects/formLayouts';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('naviget to form page', async ({ page }) => {
    const navigateTo = new NavigationPage(page);

    await navigateTo.formLayoutsPage();
    await navigateTo.datepickerPage();
    await navigateTo.smartTablePage();
    await navigateTo.toastrPage();
    await navigateTo.tooltipPage();
});

test("parametrized methods test", async({ page }) => {
    const navigateTo = new NavigationPage(page);
    const onFormLayoutPage = new FormLayoutsPage(page);

    await navigateTo.formLayoutsPage();

    await onFormLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "welcome1", "option 2");
    await onFormLayoutPage.submitInlineFormWithNameEmailAndCheckbox('Pavel', "test@gmail.com", true);
})