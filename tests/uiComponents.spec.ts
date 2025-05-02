import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test.describe('Form layout page', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText(/forms/i).click();
    await page.getByText(/form layouts/i).click();
  })

  test('input fields', async ({ page }) => {
    const usingTheGridEmailInput = page.locator("nb-card", { hasText: /using the grid/i }).getByRole('textbox', { name: /email/i });

    await usingTheGridEmailInput.fill('test@gmail.com');
  })

  test('radio buttons', async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", { hasText: /using the grid/i });

    // await usingTheGridForm.getByLabel(/option 1/i).check({ force: true });
    // await usingTheGridForm.getByRole('radio', { name: "option 1" }).check({ force: true });
    // const isStatus = await usingTheGridForm.getByLabel(/option 1/i).isChecked();

    // expect(isStatus).toBeTruthy();
    await usingTheGridForm.getByLabel(/option 2/i).check({ force: true });

    expect(await usingTheGridForm.getByLabel(/option 1/i).isChecked()).toBeFalsy()
    expect(await usingTheGridForm.getByLabel(/option 2/i).isChecked()).toBeTruthy()
  })
})


test.describe('checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText(/modal & overlays/i).click();
    await page.getByText(/toastr/i).click();
  });

  test('checkbox test', async ({ page }) => {
    await page.getByRole('checkbox', { name: "Hide on click" }).uncheck({ force: true });

    await page.getByRole('checkbox', { name: "Prevent arising of duplicate toast" }).check({ force: true });

    const allCheckBoxes = page.getByRole('checkbox');

    for (const checkbox of await allCheckBoxes.all()) {
      await checkbox.uncheck({ force: true });
      // expect(await checkbox.isChecked()).toBeTruthy();
      expect(await checkbox.isChecked()).toBeFalsy();
    } 
  });
})

test.describe('dropdown', () => {
  test('dropdown test', async ({ page }) => {
    const dropdownMenu = page.locator("ngx-header nb-select");

    await dropdownMenu.click();

    const optionList = page.getByRole('list').locator('nb-option');
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);

    await optionList.filter({ hasText: "Cosmic" }).click();

    const header = page.locator("nb-layout-header");

    await expect(header).toHaveCSS("background-color", "rgb(50, 50, 89)");

    const colors = {
      "Light": "rgb(255, 255, 255)",
      "Dark": "rgb(34, 43, 69)",
      "Cosmic": "rgb(50, 50, 89)",
      "Corporate": "rgb(255, 255, 255)",
    }

    await dropdownMenu.click();

    for (const color in colors) {
      await optionList.filter({ hasText: color }).click();

      await expect(header).toHaveCSS("background-color", colors[color]);

      await dropdownMenu.click();
    }
  })
})